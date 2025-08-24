using Airport.Service.Services;
using Infrastructure;
using MediatR;

namespace Airport.Service.Commands.Airport.CreateAirport;

internal sealed class CreateAirportCommandHandler(IAirportService airportService) 
    : IRequestHandler<CreateAirportCommand, Result<Repository.Entities.Airport>>
{
    public Task<Result<Repository.Entities.Airport>> Handle(CreateAirportCommand request, CancellationToken cancellationToken)
    {
        return airportService.AddAirportAsync(request.Airport);
    }
}
