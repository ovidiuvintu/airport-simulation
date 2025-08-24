using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Queries;

public class GetAirportByCodeQuery : IRequest<Result<AirportManagement.Service.Repository.Entities.Airport>> 
{
    public string Code { get; set; }
}
