using AirportManagement.Service.Repository;
using Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AirportManagement.Service.Commands.Gate.Delete;

public class DeleteGateCommandHandler : IRequestHandler<DeleteGateCommand, Result>
{
    private readonly AirportContext _context;

    public DeleteGateCommandHandler(AirportContext context)
    {
        _context = context;
    }

    public async Task<Result> Handle(DeleteGateCommand request, CancellationToken cancellationToken)
    {
        var res = new Result();

        var gate = await _context.Set<Repository.Entities.Gate>()
            .FirstOrDefaultAsync(g => g.Id == request.GateId && g.AirportId == request.AirportId, cancellationToken);

        if (gate is null)
        {
            res.Success = false;
            res.Error = "NotFound";
            return res;
        }

        _context.Set<Repository.Entities.Gate>().Remove(gate);
        await _context.SaveChangesAsync(cancellationToken);

        res.Success = true;
        return res;
    }
}
