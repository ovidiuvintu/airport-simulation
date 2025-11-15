using Infrastructure;
using Infrastructure.DTOs;
using MediatR;

namespace AirportManagement.Service.Commands;

public sealed class AddAirportTerminalCommand : IRequest<Result<TerminalDto>>
{
    public Guid AirportId { get; set; }
    public TerminalCreateDto Terminal { get; set; } = default!;
}
