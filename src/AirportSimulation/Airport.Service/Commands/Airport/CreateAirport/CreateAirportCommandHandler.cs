using Airport.Service.Services;
using Infrastructure;
using MediatR;

namespace Airport.Service.Commands.Airport.CreateAirport;

internal sealed class CreateAirportCommandHandler(IAirportService airportService) : IRequestHandler<CreateAirportCommand, Result>
{
    public Task<Result> Handle(CreateAirportCommand request, CancellationToken cancellationToken)
    {
        Repository.Entities.Airport airport = new()
        {
            AirportCode = request.AirportCode,
            Name = request.Name
        };
        return airportService.AddAirportAsync(airport);
    }
}
