using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Commands;

public class DeleteAirportCommandHandler : RequestHandler<DeleteAirportCommand, Result>
{
    protected override Result Handle(DeleteAirportCommand request)
    {
        throw new NotImplementedException();
    }
}
