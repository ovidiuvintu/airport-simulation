using AirportManagement.Service.Services;
using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Queries;

internal sealed class GetAllAirportsQueryHandler(IAirportService airportService)
        : IRequestHandler<GetAllAirportsQuery, Result<IEnumerable<AirportManagement.Service.Repository.Entities.Airport>>>
{
    public async Task<Result<IEnumerable<AirportManagement.Service.Repository.Entities.Airport>>> Handle(GetAllAirportsQuery request, CancellationToken cancellationToken)
    {
        return await airportService.GetAllAirportsAsync(cancellationToken);
    }
}
