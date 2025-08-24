using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Commands;

public class UpdateAirportCommandHandler : RequestHandler<UpdateAirportCommand, Result>
{
    protected override Result Handle(UpdateAirportCommand request)
    {
        throw new NotImplementedException();
    }
}
