using Infrastructure.DTOs;

namespace Airport.Service.Services;

public class AirportServiceMapper
{
    public Repository.Entities.Airport MapAirportDTOToAirportEntity(AirportDTO airportDto)
    {
        return new Repository.Entities.Airport
        {
            AirportCode = airportDto.AirportCode,
            Description = airportDto.Description,
            Name = airportDto.Name,
        };
    }

    public AirportDTO MapAirportEntityToAirportDTO(Repository.Entities.Airport airportEntity)
    {
        return new AirportDTO(airportEntity.Id,
                              airportEntity.Name,
                              airportEntity.Description,
                              airportEntity.AirportCode,
                              airportEntity.Created,
                              airportEntity.Updated);       
    }
}
