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
