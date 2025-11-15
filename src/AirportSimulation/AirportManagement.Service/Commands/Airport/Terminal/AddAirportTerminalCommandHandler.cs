using AirportManagement.Service.Services;
using Infrastructure;
using Infrastructure.DTOs;
using MediatR;
using AirportManagement.Service.Repository.Entities;

namespace AirportManagement.Service.Commands;

internal sealed class AddAirportTerminalCommandHandler(IAirportService airportService) : IRequestHandler<AddAirportTerminalCommand, Result<TerminalDto>>
{
    public async Task<Result<TerminalDto>> Handle(AddAirportTerminalCommand request, CancellationToken cancellationToken)
    {
        var terminalEntity = new Terminal
        {
            Name = request.Terminal.Name,
        };

        var result = await airportService.AddTerminalAsync(request.AirportId, terminalEntity, cancellationToken);
        if (!result.Success || result.Data == null)
        {
            return new Result<TerminalDto> { Success = false, Error = result.Error };
        }

        var dto = result.Data.AsTerminalDto();
        return new Result<TerminalDto> { Success = true, Data = dto };
    }
}
