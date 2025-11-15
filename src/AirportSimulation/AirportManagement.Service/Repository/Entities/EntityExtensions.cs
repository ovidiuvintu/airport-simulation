using Infrastructure.DTOs;
using System.Linq;

namespace AirportManagement.Service.Repository.Entities;

public static class EntityExtensions
{
    public static AirportDTO AsAirportDto(this Airport airportEntity)
    {
        if (airportEntity == null) throw new ArgumentNullException(nameof(airportEntity));

        var terminals = airportEntity.Terminals == null
            ? Enumerable.Empty<TerminalDto>()
            : GetTerminalDTOs(airportEntity.Terminals);

        return new AirportDTO(
            airportEntity.Id.ToString(),
            airportEntity.Name,
            airportEntity.Description,
            airportEntity.AirportCode,
            terminals,
            airportEntity.Created,
            airportEntity.Updated);
    }

    public static TerminalDto AsTerminalDto(this Terminal terminalEntity)
    {
        return new TerminalDto(
            terminalEntity.Id.ToString(),
            terminalEntity.Name,
            terminalEntity.AirportId.ToString(),
            terminalEntity.Created,
            terminalEntity.Updated);
    }

    public static Airport AsAirportEntity(this AirportDTO airportDto)
    {
        return new Airport
        {
            Name = airportDto.Name,
            Description = airportDto.Description,
            AirportCode = airportDto.AirportCode,
            Created = airportDto.DateCreated,
            Updated = airportDto.DateUpdated,
        };
    }

    public static Terminal AsTerminalEntity(this TerminalDto terminalDto)
    {
        return new Terminal
        {
            Name = terminalDto.Name,
        };
    }

    private static IEnumerable<TerminalDto> GetTerminalDTOs(IEnumerable<Terminal> terminals)
    {
        var terminalDtos = new List<TerminalDto>();
        foreach (var terminal in terminals)
        {
            terminalDtos.Add(terminal.AsTerminalDto());
        }

        return terminalDtos;
    }
}
