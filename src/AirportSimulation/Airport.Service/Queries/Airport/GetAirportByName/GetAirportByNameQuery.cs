using Infrastructure;
using MediatR;

namespace Airport.Service.Queries.Airport.GetAirportByCode;

public class GetAirportByNameQuery : IRequest<Result<Repository.Entities.Airport>>
{
    public string Name { get; set; }
}
