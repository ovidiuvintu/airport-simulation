using AirportManagement.Service.Services;
using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Queries;

internal sealed class GetAirportByNameQueryHandler(IAirportService airportService)
    : IRequestHandler<GetAirportByNameQuery, Result<AirportManagement.Service.Repository.Entities.Airport>>
{
    public async Task<Result<AirportManagement.Service.Repository.Entities.Airport>> Handle(GetAirportByNameQuery request, CancellationToken cancellationToken)
    {
        return await airportService.GetAirportByCodeAsync(request.Name, cancellationToken);
    }
}
