using MediatR;
using System.Text.Json;
using Infrastructure;

namespace AirportManagement.Service.Commands.Terminal.PatchTerminal;

public class PatchTerminalCommand : IRequest<Result<string>>
{
    public Guid AirportId { get; set; }
    public Guid TerminalId { get; set; }
    public JsonElement PatchDocument { get; set; }
}
