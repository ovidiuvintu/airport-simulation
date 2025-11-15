using AirportManagement.Service.Services;
using Infrastructure;
using Infrastructure.DTOs;
using MediatR;
using AirportManagement.Service.Repository.Entities;

namespace AirportManagement.Service.Queries;

internal sealed class GetAirportByCodeQueryHandler(IAirportService airportService)
    : IRequestHandler<GetAirportByCodeQuery, Result<AirportDTO>>
{
    public async Task<Result<AirportDTO>> Handle(GetAirportByCodeQuery request, CancellationToken cancellationToken)
    {
        var result = await airportService.GetAirportByCodeAsync(request.Code, cancellationToken);
        if (!result.Success)
        {
            return new Result<AirportDTO> { Success = false, Error = result.Error };
        }

        return new Result<AirportDTO> { Success = true, Data = result.Data.AsAirportDto() };
    }
}
