using Infrastructure;
using Infrastructure.DTOs;
using MediatR;

namespace AirportManagement.Service.Commands.Gate.Create;

public sealed class CreateGateCommand : IRequest<Result<GateDto>>
{
    public Guid AirportId { get; set; }
    public Guid TerminalId { get; set; }
    public GateDto Gate { get; set; } = default!;
}
