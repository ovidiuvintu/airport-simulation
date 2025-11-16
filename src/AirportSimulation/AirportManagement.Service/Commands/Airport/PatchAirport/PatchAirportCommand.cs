using MediatR;
using System.Text.Json;
using Infrastructure;

namespace AirportManagement.Service.Commands.Airport.PatchAirport;

public class PatchAirportCommand : IRequest<Result<string>>
{
    public Guid AirportId { get; set; }
    public JsonElement PatchDocument { get; set; }
    // IfMatch property removed as header support is being removed
}
