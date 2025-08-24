using AirportManagement.Service.Services;
using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Commands;

public class UpdateAirportCommandHandler(IAirportService airportService)
    : IRequestHandler<UpdateAirportCommand, Result>
{
    public async Task<Result> Handle(UpdateAirportCommand request, CancellationToken cancellationToken)
    {
        return await airportService.UpdateAirportAsync(request.Airport, cancellationToken);
    }
}
