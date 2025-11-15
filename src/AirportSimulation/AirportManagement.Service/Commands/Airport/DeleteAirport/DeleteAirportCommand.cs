using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Commands;

public class DeleteAirportCommand : IRequest<Result>
{
	public Guid AirportId { get; set; }
}
