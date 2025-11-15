using AirportManagement.Service.Services;
using Infrastructure;
using Infrastructure.DTOs;
using MediatR;
using AirportManagement.Service.Repository.Entities;

namespace AirportManagement.Service.Commands;

public class UpdateAirportCommandHandler(IAirportService airportService)
    : IRequestHandler<UpdateAirportCommand, Result>
{
    public async Task<Result> Handle(UpdateAirportCommand request, CancellationToken cancellationToken)
    {
        // Map UpdateAirportDto -> Airport entity for service layer
        var model = new AirportManagement.Service.Repository.Entities.Airport
        {
            Name = request.Airport.Name,
            Description = request.Airport.Description,
            AirportCode = request.Airport.AirportCode,
        };

        return await airportService.UpdateAirportAsync(request.AirportId, model, cancellationToken);
    }
}
