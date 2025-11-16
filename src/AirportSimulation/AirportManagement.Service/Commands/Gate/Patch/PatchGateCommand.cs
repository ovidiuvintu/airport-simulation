using Infrastructure;
using MediatR;
using System.Text.Json;

namespace AirportManagement.Service.Commands.Gate.Patch;

public sealed class PatchGateCommand : IRequest<Result<string>>
{
    public Guid AirportId { get; set; }
    public Guid GateId { get; set; }
    public Guid TerminalId { get; set; }
    public JsonElement PatchDocument { get; set; }
}
