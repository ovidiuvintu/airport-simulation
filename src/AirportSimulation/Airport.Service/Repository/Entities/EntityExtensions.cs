using Infrastructure.DTOs;

namespace Airport.Service.Repository.Entities;

public static class EntityExtensions
{
    public static AirportDTO AsAirportDto(this Airport airportEntity)
    {
        return new AirportDTO(airportEntity.Id.ToString(),
            airportEntity.Name,
            airportEntity.Description,
            airportEntity.AirportCode,
            GetTerminalDTOs(airportEntity.Terminals),
            airportEntity.Created, airportEntity.Updated);
    }

    public static Airport AsAirportEntity(this AirportDTO airportDto)
    {
        return new Airport
        {
            Name = airportDto.Name,
            Description = airportDto.Description,
            AirportCode = airportDto.AirportCode
        };
    }

    private static object GetTerminalEntities(IEnumerable<TerminalDto> terminals)
    {
        throw new NotImplementedException();
    }

    private static IEnumerable<TerminalDto> GetTerminalDTOs(IEnumerable<Terminal> terminals)
    {
        var terminalDtos = new List<TerminalDto>();
        foreach (var terminal in terminals)
        {
            terminalDtos.Add(new TerminalDto(terminal.Id.ToString(),
                                             terminal.Name,
                                             terminal.AirportId,
                                             terminal.Created,
                                             terminal.Updated));
        }

        return terminalDtos;
    }
}
