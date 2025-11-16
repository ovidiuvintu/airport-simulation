using AirportManagement.Service.Repository;
using AirportManagement.Service.Utils;
using Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace AirportManagement.Service.Commands.Terminal.PatchTerminal;

public class PatchTerminalCommandHandler : IRequestHandler<PatchTerminalCommand, Result<string>>
{
    private readonly AirportContext _context;

    public PatchTerminalCommandHandler(AirportContext context)
    {
        _context = context;
    }

    public async Task<Result<string>> Handle(PatchTerminalCommand request, CancellationToken cancellationToken)
    {
        var res = new Result<string>();

        var terminal = await _context.Set<Repository.Entities.Terminal>()
            .FirstOrDefaultAsync(t => t.Id == request.TerminalId && t.AirportId == request.AirportId, cancellationToken);

        if (terminal is null)
        {
            res.Success = false;
            res.Error = "NotFound";
            return res;
        }

        // Blind write semantics (no If-Match)

        var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
        var terminalJson = JsonSerializer.SerializeToNode(new
        {
            id = terminal.Id,
            airportId = terminal.AirportId,
            name = terminal.Name
        }, options);

        var patchNode = JsonNode.Parse(request.PatchDocument.GetRawText());
        if (patchNode is null)
        {
            res.Success = false;
            res.Error = "InvalidPatch";
            return res;
        }

        // Disallow patching read-only fields
        if (patchNode is JsonObject pobj && (pobj.ContainsKey("id") || pobj.ContainsKey("airportId") || pobj.ContainsKey("dateCreated") || pobj.ContainsKey("dateUpdated")))
        {
            res.Success = false;
            res.Error = "ReadOnlyFieldNotAllowed";
            return res;
        }

        JsonMergePatch.Apply(terminalJson, patchNode);

        // Apply merged values back to entity
        terminal.Name = terminalJson["name"]?.GetValue<string>() ?? terminal.Name;

        try
        {
            await _context.SaveChangesAsync(cancellationToken);
            res.Success = true;
            res.Data = string.Empty;
            return res;
        }
        catch (DbUpdateConcurrencyException)
        {
            res.Success = false;
            res.Error = "PreconditionFailed";
            return res;
        }
        catch (Exception ex)
        {
            res.Success = false;
            res.Error = ex.Message;
            return res;
        }
    }
}
