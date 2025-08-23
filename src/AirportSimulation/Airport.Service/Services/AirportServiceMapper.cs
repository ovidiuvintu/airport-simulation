using Airport.Service.DTOs;

namespace Airport.Service.Services
{
    public class AirportServiceMapper
    {
        public Repository.Entities.Airport MapAirportDTOToAirportEntity(AirportDto airportDto)
        {
            return new Repository.Entities.Airport
            {
                AirportCode = airportDto.AirportCode,
                Description = airportDto.Description,
                Name = airportDto.Name,
            };
        }

        public AirportDto MapAirportEntityToAirportDTO(Repository.Entities.Airport airportEntity)
        {
            return new AirportDto
            {
                AirportCode = airportEntity.AirportCode,
                Description = airportEntity.Description,
                Name = airportEntity.Name,
                DateUpdated = DateTime.UtcNow,
                DateCreated = DateTime.UtcNow,
                Timestamp = DateTime.UtcNow
            };
        }
    }
}
