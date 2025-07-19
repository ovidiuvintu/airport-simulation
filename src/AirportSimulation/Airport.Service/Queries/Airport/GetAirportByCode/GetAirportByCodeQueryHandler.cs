using Infrastructure;
using MediatR;

namespace Airport.Service.Queries.Airport.GetAirportByCode;

public class GetAirportByCodeQueryHandler : RequestHandler<GetAirportByCodeQuery, Result<Entities.Airport>>
{
    protected override Result<Entities.Airport> Handle(GetAirportByCodeQuery request)
    {
        throw new NotImplementedException();
    }
}
