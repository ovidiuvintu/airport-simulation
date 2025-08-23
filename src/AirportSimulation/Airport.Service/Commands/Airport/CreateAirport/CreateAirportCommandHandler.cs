using Airport.Service.Services;
using Infrastructure;
using MediatR;

namespace Airport.Service.Commands.Airport.CreateAirport;

internal sealed class CreateAirportCommandHandler : RequestHandler<CreateAirportCommand, Result>
{
    private readonly IAirportService _airportService;

    public CreateAirportCommandHandler(IAirportService airportService)
    {
        _airportService = airportService;
    }
    protected override Result Handle(CreateAirportCommand request)
    {
        throw new NotImplementedException();
    }
}
