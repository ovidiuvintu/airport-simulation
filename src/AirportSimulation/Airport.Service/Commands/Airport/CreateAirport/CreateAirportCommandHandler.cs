using Infrastructure;
using MediatR;

namespace Airport.Service.Commands.Airport.CreateAirport;

public class CreateAirportCommandHandler : RequestHandler<CreateAirportCommand, Result>
{
    protected override Result Handle(CreateAirportCommand request)
    {
        throw new NotImplementedException();
    }
}
