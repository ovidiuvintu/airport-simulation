using Infrastructure;
using Infrastructure.DTOs;
using MediatR;

namespace AirportManagement.Service.Queries;

public class GetAirportByCodeQuery : IRequest<Result<AirportDTO>> 
{
    public string Code { get; set; }
}
