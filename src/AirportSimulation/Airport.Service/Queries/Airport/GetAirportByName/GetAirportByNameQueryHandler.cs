using Airport.Service.Queries.Airport.GetAirportByCode;
using Airport.Service.Services;
using Infrastructure;
using MediatR;

namespace Airport.Service.Queries.Airport.GetAirportByName;

internal sealed class GetAirportByNameQueryHandler(IAirportService airportService)
        : IRequestHandler<GetAirportByNameQuery, Result<Repository.Entities.Airport>>
{
    public async Task<Result<Repository.Entities.Airport>> Handle(GetAirportByNameQuery request, CancellationToken cancellationToken)
    {
        return await airportService.GetAirportByNameAsync(request.Name, cancellationToken);
    }
}
