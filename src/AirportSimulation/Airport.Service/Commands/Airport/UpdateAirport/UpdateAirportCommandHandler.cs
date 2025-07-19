using Infrastructure;
using MediatR;

namespace Airport.Service.Commands.Airport.UpdateAirport;

public class UpdateAirportCommandHandler : RequestHandler<UpdateAirportCommand, Result>
{
    protected override Result Handle(UpdateAirportCommand request)
    {
        throw new NotImplementedException();
    }
}
