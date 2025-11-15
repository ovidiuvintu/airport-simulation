using Infrastructure;
using Infrastructure.DTOs;
using MediatR;

namespace AirportManagement.Service.Queries;

public class GetAirportByNameQuery : IRequest<Result<AirportDTO>>
{
    public string Name { get; set; }
}

