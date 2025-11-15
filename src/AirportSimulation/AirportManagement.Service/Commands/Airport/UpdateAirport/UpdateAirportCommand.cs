using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Commands;

public class UpdateAirportCommand : IRequest<Result>
{
    public AirportManagement.Service.Repository.Entities.Airport Airport { get; set; }
    public Guid AirportId { get; set; }
}
