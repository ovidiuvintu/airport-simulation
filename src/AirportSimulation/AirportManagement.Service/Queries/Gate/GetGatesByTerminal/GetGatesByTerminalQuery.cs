using Infrastructure.DTOs;
using MediatR;

namespace AirportManagement.Service.Queries.Gate.GetGatesByTerminal;

public class GetGatesByTerminalQuery : IRequest<Infrastructure.Result<IEnumerable<GateDto>>>
{
    public Guid AirportId { get; set; }
    public Guid TerminalId { get; set; }
}
