using AirportManagement.Service.Repository;
using AirportManagement.Service.Utils;
using Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace AirportManagement.Service.Commands.Gate.Patch;

public class PatchGateCommandHandler : IRequestHandler<PatchGateCommand, Result<string>>
{
    private readonly AirportContext _context;

    public PatchGateCommandHandler(AirportContext context)
    {
        _context = context;
    }

    public async Task<Result<string>> Handle(PatchGateCommand request, CancellationToken cancellationToken)
    {
        var res = new Result<string>();

        var gate = await _context.Set<Repository.Entities.Gate>()
            .FirstOrDefaultAsync(g => g.Id == request.GateId && g.AirportId == request.AirportId, cancellationToken);

        if (gate is null)
        {
            res.Success = false;
            res.Error = "NotFound";
            return res;
        }

        var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
        var gateJson = JsonSerializer.SerializeToNode(new
        {
            id = gate.Id,
            airportId = gate.AirportId,
            concourseId = gate.ConcourseId,
            name = gate.Name,
            gateType = gate.GateType,
            isInternational = gate.IsInternational
        }, options);

        var patchNode = JsonNode.Parse(request.PatchDocument.GetRawText());
        if (patchNode is null)
        {
            res.Success = false;
            res.Error = "InvalidPatch";
            return res;
        }

        if (patchNode is JsonObject pobj && (pobj.ContainsKey("id") || pobj.ContainsKey("airportId") || pobj.ContainsKey("dateCreated") || pobj.ContainsKey("dateUpdated")))
        {
            res.Success = false;
            res.Error = "ReadOnlyFieldOrCollectionNotAllowed";
            return res;
        }

        JsonMergePatch.Apply(gateJson, patchNode);

        // Apply merged values back to entity
        gate.Name = gateJson["name"]?.GetValue<string>() ?? gate.Name;
        if (gateJson["isInternational"] != null) gate.IsInternational = gateJson["isInternational"]!.GetValue<bool>();
        if (gateJson["gateType"] != null) gate.GateType = (Repository.Entities.GateType)gateJson["gateType"]!.GetValue<int>();

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
