using AirportManagement.Service.Repository;
using Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace AirportManagement.Service.Commands.Gate.Update;

public class UpdateGateCommandHandler : IRequestHandler<UpdateGateCommand, Result>
{
    private readonly AirportContext _context;

    public UpdateGateCommandHandler(AirportContext context)
    {
        _context = context;
    }

    public async Task<Result> Handle(UpdateGateCommand request, CancellationToken cancellationToken)
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

        // apply full update
        gate.Name = request.Gate.Name;
        gate.IsInternational = request.Gate.IsInternational;
        gate.GateType = (Repository.Entities.GateType)request.Gate.GateType;

        try
        {
            await _context.SaveChangesAsync(cancellationToken);
            res.Success = true;
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
