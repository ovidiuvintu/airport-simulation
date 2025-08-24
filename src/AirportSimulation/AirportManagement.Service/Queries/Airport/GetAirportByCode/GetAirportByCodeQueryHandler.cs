using AirportManagement.Service.Services;
using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Queries;

internal sealed class GetAirportByCodeQueryHandler(IAirportService airportService) 
    : IRequestHandler<GetAirportByCodeQuery, Result<AirportManagement.Service.Repository.Entities.Airport>>
{
    public async Task<Result<AirportManagement.Service.Repository.Entities.Airport>> Handle(GetAirportByCodeQuery request, CancellationToken cancellationToken)
    {
        return await airportService.GetAirportByCodeAsync(request.Code, cancellationToken);
    }
}
