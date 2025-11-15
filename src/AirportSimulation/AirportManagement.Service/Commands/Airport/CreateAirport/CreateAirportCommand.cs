using Infrastructure;
using MediatR;
using Infrastructure.DTOs;

namespace AirportManagement.Service.Commands;

public class CreateAirportCommand : IRequest<Result<AirportDTO>>
{
    public CreateAirportDto Airport { get; set; }
}
