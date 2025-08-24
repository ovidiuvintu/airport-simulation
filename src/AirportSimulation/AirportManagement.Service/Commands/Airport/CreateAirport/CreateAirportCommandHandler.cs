using AirportManagement.Service.Services;
using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Commands;

internal sealed class CreateAirportCommandHandler(IAirportService airportService) 
    : IRequestHandler<CreateAirportCommand, Result<AirportManagement.Service.Repository.Entities.Airport>>
{
    public Task<Result<AirportManagement.Service.Repository.Entities.Airport>> Handle(CreateAirportCommand request, CancellationToken cancellationToken)
    {
        return airportService.AddAirportAsync(request.Airport);
    }
}
