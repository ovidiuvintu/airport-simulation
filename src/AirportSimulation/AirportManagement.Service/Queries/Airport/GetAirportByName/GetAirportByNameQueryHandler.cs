using AirportManagement.Service.Services;
using Infrastructure;
using Infrastructure.DTOs;
using MediatR;
using AirportManagement.Service.Repository.Entities;

namespace AirportManagement.Service.Queries;

internal sealed class GetAirportByNameQueryHandler(IAirportService airportService)
    : IRequestHandler<GetAirportByNameQuery, Result<AirportDTO>>
{
    public async Task<Result<AirportDTO>> Handle(GetAirportByNameQuery request, CancellationToken cancellationToken)
    {
        var result = await airportService.GetAirportByNameAsync(request.Name, cancellationToken);
        if (!result.Success)
        {
            return new Result<AirportDTO> { Success = false, Error = result.Error };
        }

        return new Result<AirportDTO> { Success = true, Data = result.Data.AsAirportDto() };
    }
}
