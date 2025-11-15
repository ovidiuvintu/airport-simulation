using AirportManagement.Service.Services;
using Infrastructure;
using MediatR;

namespace AirportManagement.Service.Commands;

internal sealed class DeleteAirportCommandHandler(IAirportService airportService) : IRequestHandler<DeleteAirportCommand, Result>
{
    public async Task<Result> Handle(DeleteAirportCommand request, CancellationToken cancellationToken)
    {
        var result = await airportService.DeleteAirportAsync(request.AirportId, cancellationToken);
        return new Result { Success = result.Success, Error = result.Error };
    }
}
