using Infrastructure;
using MediatR;

namespace Airport.Service.Commands.Airport.CreateAirport;

public class CreateAirportCommand : IRequest<Result<Repository.Entities.Airport>>
{
    public string Name { get; set; }
    public string Description { get; set; }
    public string AirportCode { get; set; }
}
