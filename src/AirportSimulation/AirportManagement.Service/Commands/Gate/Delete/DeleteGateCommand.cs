using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Commands.Gate.Delete;

public sealed class DeleteGateCommand : IRequest<Result>
{
    public Guid AirportId { get; set; }
    public Guid GateId { get; set; }
    public Guid TerminalId { get; set; }
}
