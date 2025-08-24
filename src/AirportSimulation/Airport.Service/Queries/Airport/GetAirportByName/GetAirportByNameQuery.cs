using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Queries;

public class GetAirportByNameQuery : IRequest<Result<AirportManagement.Service.Repository.Entities.Airport>>
{
    public string Name { get; set; }
}

