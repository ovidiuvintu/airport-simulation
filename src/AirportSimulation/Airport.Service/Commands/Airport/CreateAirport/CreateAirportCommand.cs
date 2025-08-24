using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Commands;

public class CreateAirportCommand : IRequest<Result<AirportManagement.Service.Repository.Entities.Airport>>
{
    public AirportManagement.Service.Repository.Entities.Airport Airport { get; set; }
}
