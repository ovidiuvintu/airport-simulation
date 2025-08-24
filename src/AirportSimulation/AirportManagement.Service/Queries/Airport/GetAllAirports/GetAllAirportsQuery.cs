using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Queries;

public class GetAllAirportsQuery : IRequest<Result<IEnumerable<AirportManagement.Service.Repository.Entities.Airport>>>
{
}
