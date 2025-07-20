using Infrastructure;
using MediatR;

namespace Airport.Service.Queries.Airport.GetAirportByCode;

public class GetAirportByCodeQueryHandler : RequestHandler<GetAirportByCodeQuery, Result<Repository.Entities.Airport>>
{
    protected override Result<Repository.Entities.Airport> Handle(GetAirportByCodeQuery request)
    {
        throw new NotImplementedException();
    }
}
