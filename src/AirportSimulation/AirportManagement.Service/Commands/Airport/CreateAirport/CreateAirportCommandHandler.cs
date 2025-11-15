using AirportManagement.Service.Services;
using Infrastructure;
using Infrastructure.DTOs;
using MediatR;
using AirportManagement.Service.Repository.Entities;

namespace AirportManagement.Service.Commands;

internal sealed class CreateAirportCommandHandler(IAirportService airportService)
    : IRequestHandler<CreateAirportCommand, Result<AirportDTO>>
{
    public async Task<Result<AirportDTO>> Handle(CreateAirportCommand request, CancellationToken cancellationToken)
    {
        // Map CreateAirportDto -> Airport entity (do not expose entity at API boundary)
        var model = new AirportManagement.Service.Repository.Entities.Airport
        {
            Name = request.Airport.Name,
            Description = request.Airport.Description,
            AirportCode = request.Airport.AirportCode,
            Terminals = request.Airport.Terminals?.Select(t => new AirportManagement.Service.Repository.Entities.Terminal { Name = t.Name }).ToList()
                                 ?? new List<AirportManagement.Service.Repository.Entities.Terminal>()
        };

        var result = await airportService.AddAirportAsync(model);

        if (!result.Success)
        {
            return new Result<AirportDTO> { Success = false, Error = result.Error };
        }

        // Map persisted entity -> AirportDTO
        var dto = result.Data.AsAirportDto();
        return new Result<AirportDTO> { Success = true, Data = dto };
    }
}
