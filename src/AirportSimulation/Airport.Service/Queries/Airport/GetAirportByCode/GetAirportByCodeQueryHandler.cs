using Airport.Service.Services;
using Infrastructure;
using MediatR;

namespace Airport.Service.Queries.Airport.GetAirportByCode;

internal sealed class GetAirportByCodeQueryHandler(IAirportService airportService) 
    : IRequestHandler<GetAirportByCodeQuery, Result<Repository.Entities.Airport>>
{
    public async Task<Result<Repository.Entities.Airport>> Handle(GetAirportByCodeQuery request, CancellationToken cancellationToken)
    {
        return await airportService.GetAirportByCodeAsync(request.Code, cancellationToken);
    }
}
