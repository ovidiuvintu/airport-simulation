using Infrastructure;
using MediatR;

namespace Airport.Service.Commands.Airport.CreateAirport;

public class CreateAirportCommand : IRequest<Result<Repository.Entities.Airport>>
{
    public Repository.Entities.Airport Airport { get; set; }
}
