using AirportManagement.Service.Services;
using Infrastructure;
using Infrastructure.DTOs;
using MediatR;
using AirportManagement.Service.Repository.Entities;

namespace AirportManagement.Service.Queries;

internal sealed class GetAllAirportsQueryHandler(IAirportService airportService)
        : IRequestHandler<GetAllAirportsQuery, Result<IEnumerable<AirportDTO>>>
{
    public async Task<Result<IEnumerable<AirportDTO>>> Handle(GetAllAirportsQuery request, CancellationToken cancellationToken)
    {
        var result = await airportService.GetAllAirportsAsync(cancellationToken);
        if (!result.Success)
        {
            return new Result<IEnumerable<AirportDTO>> { Success = false, Error = result.Error };
        }

        var dtos = result.Data?.Select(a => a.AsAirportDto()) ?? Enumerable.Empty<AirportDTO>();
        return new Result<IEnumerable<AirportDTO>> { Success = true, Data = dtos };
    }
}
