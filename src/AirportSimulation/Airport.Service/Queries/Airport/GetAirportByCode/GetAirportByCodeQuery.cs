using Infrastructure;
using MediatR;

namespace Airport.Service.Queries.Airport.GetAirportByCode;

public class GetAirportByCodeQuery : IRequest<Result<Repository.Entities.Airport>> 
{
    public string Code { get; set; }
}
