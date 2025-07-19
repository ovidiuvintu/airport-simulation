using Infrastructure;
using MediatR;

namespace Airport.Service.Commands.Airport.DeleteAirport;

public class DeleteAirportCommandHandler : RequestHandler<DeleteAirportCommand, Result>
{
    protected override Result Handle(DeleteAirportCommand request)
    {
        throw new NotImplementedException();
    }
}
