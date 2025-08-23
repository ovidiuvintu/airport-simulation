using Airport.Service.Services;
using Infrastructure;
using MediatR;

namespace Airport.Service.Commands.Airport.CreateAirport;

internal sealed class CreateAirportCommandHandler : IRequestHandler<CreateAirportCommand, Result>
{
    private readonly IAirportService _airportService;

    public CreateAirportCommandHandler(IAirportService airportService)
    {
        _airportService = airportService;
    }

    public Task<Result> Handle(CreateAirportCommand request, CancellationToken cancellationToken)
    {
        Repository.Entities.Airport airport = new Repository.Entities.Airport();
        airport.AirportCode = request.AirportCode;
        airport.Name = request.Name;
        return _airportService.AddAirportAsync(airport);
    }
}
