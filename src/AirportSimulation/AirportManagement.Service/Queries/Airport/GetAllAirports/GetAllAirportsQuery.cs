using Infrastructure;
using Infrastructure.DTOs;
using MediatR;

namespace AirportManagement.Service.Queries;

public class GetAllAirportsQuery : IRequest<Result<IEnumerable<AirportDTO>>>
{
}
