using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Commands.Gate.Update;

public sealed class UpdateGateCommand : IRequest<Result>
{
    public Guid AirportId { get; set; }
    public Guid TerminalId { get; set; }
    public Guid GateId { get; set; }
    public Infrastructure.DTOs.GateDto Gate { get; set; } = default!;
}
