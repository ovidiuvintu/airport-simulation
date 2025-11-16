using AirportManagement.Service.Repository;
using Infrastructure;
using Infrastructure.DTOs;
using MediatR;
using Microsoft.EntityFrameworkCore;
using AirportManagement.Service.Repository.Entities;

namespace AirportManagement.Service.Commands.Gate.Create;

public class CreateGateCommandHandler : IRequestHandler<CreateGateCommand, Result<GateDto>>
{
    private readonly AirportContext _context;

    public CreateGateCommandHandler(AirportContext context)
    {
        _context = context;
    }

    public async Task<Result<GateDto>> Handle(CreateGateCommand request, CancellationToken cancellationToken)
    {
        var res = new Result<GateDto>();

        var airport = await _context.Set<Repository.Entities.Airport>()
            .FirstOrDefaultAsync(a => a.Id == request.AirportId, cancellationToken);

        if (airport is null)
        {
            return new Result<GateDto> { Success = false, Error = "AirportNotFound" };
        }

        var gateEntity = new Repository.Entities.Gate
        {
            AirportId = request.AirportId,
            ConcourseId = request.TerminalId,
            Name = request.Gate.Name,
            GateType = (Repository.Entities.GateType)request.Gate.GateType,
            IsInternational = request.Gate.IsInternational,
        };

        await _context.Set<Repository.Entities.Gate>().AddAsync(gateEntity, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);

        res.Success = true;
        res.Data = gateEntity.AsGateDto();
        return res;
    }
}
