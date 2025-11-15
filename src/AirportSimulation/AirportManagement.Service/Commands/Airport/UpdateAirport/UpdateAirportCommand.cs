using Infrastructure;
using MediatR;
using Infrastructure.DTOs;

namespace AirportManagement.Service.Commands;

public class UpdateAirportCommand : IRequest<Result>
{
    public UpdateAirportDto Airport { get; set; }
    public Guid AirportId { get; set; }
}
