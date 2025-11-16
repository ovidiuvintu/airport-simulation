using AirportManagement.Service.Repository;
using AirportManagement.Service.Utils;
using Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace AirportManagement.Service.Commands.Airport.PatchAirport;

public class PatchAirportCommandHandler : IRequestHandler<PatchAirportCommand, Result<string>>
{
    private readonly AirportContext _context;

    public PatchAirportCommandHandler(AirportContext context)
    {
        _context = context;
    }

    public async Task<Result<string>> Handle(PatchAirportCommand request, CancellationToken cancellationToken)
    {
        var res = new Result<string>();

        var airport = await _context.Set<Repository.Entities.Airport>()
            .Include(a => a.Terminals)
            .FirstOrDefaultAsync(a => a.Id == request.AirportId, cancellationToken);

        if (airport is null)
        {
            res.Success = false;
            res.Error = "NotFound";
            return res;
        }

        // If-Match header support removed — proceed with blind write semantics.

        // Deserialize airport to JsonNode, apply patch and then update entity fields
        var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
        var airportJson = JsonSerializer.SerializeToNode(new
        {
            id = airport.Id,
            name = airport.Name,
            description = airport.Description,
            airportCode = airport.AirportCode
        }, options);

        var patchNode = JsonNode.Parse(request.PatchDocument.GetRawText());
        if (patchNode is null)
        {
            res.Success = false;
            res.Error = "InvalidPatch";
            return res;
        }

        // Disallow patching Terminals collection or read-only fields
        if (patchNode is JsonObject pobj && (pobj.ContainsKey("terminals") || pobj.ContainsKey("id") || pobj.ContainsKey("dateCreated") || pobj.ContainsKey("dateUpdated")))
        {
            res.Success = false;
            res.Error = "ReadOnlyFieldOrCollectionNotAllowed";
            return res;
        }

        JsonMergePatch.Apply(airportJson, patchNode);

        // Apply merged values back to entity
        airport.Name = airportJson["name"]?.GetValue<string>() ?? airport.Name;
        airport.Description = airportJson["description"]?.GetValue<string>();
        airport.AirportCode = airportJson["airportCode"]?.GetValue<string>() ?? airport.AirportCode;

        // Save changes -- AirportContext will update Updated timestamp
        try
        {
            await _context.SaveChangesAsync(cancellationToken);
            // Return empty Data (no ETag/If-Match support)
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
