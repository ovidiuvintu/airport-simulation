using AirportManagement.Service.Repository;
using Infrastructure;
using Infrastructure.DTOs;
using MediatR;
using Microsoft.EntityFrameworkCore;
using AirportManagement.Service.Repository.Entities;

namespace AirportManagement.Service.Queries.Gate.GetGatesByTerminal;

internal sealed class GetGatesByTerminalQueryHandler : IRequestHandler<GetGatesByTerminalQuery, Result<IEnumerable<GateDto>>>
{
    private readonly AirportContext _context;

    public GetGatesByTerminalQueryHandler(AirportContext context)
    {
        _context = context;
    }

    public async Task<Result<IEnumerable<GateDto>>> Handle(GetGatesByTerminalQuery request, CancellationToken cancellationToken)
    {
        var gates = await _context.Set<AirportManagement.Service.Repository.Entities.Gate>()
            .Where(g => g.AirportId == request.AirportId && g.ConcourseId == request.TerminalId)
            .ToListAsync(cancellationToken);

        var dtos = gates.Select(g => g.AsGateDto());
        return new Result<IEnumerable<GateDto>> { Success = true, Data = dtos };
    }
}
