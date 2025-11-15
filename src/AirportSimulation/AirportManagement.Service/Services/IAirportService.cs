using Infrastructure;

namespace AirportManagement.Service.Services;

public interface IAirportService
{
    Task<Result<AirportManagement.Service.Repository.Entities.Airport>> AddAirportAsync(AirportManagement.Service.Repository.Entities.Airport model);
    Task<Result<AirportManagement.Service.Repository.Entities.Airport>> GetAirportByCodeAsync(string code, CancellationToken cancellationToken);
    Task<Result<AirportManagement.Service.Repository.Entities.Airport>> GetAirportByNameAsync(string name, CancellationToken cancellationToken);
    Task<Result<IEnumerable<AirportManagement.Service.Repository.Entities.Airport>>> GetAllAirportsAsync(CancellationToken cancellationToken);
    Task<Result<AirportManagement.Service.Repository.Entities.Airport>> UpdateAirportAsync(Guid airportId, AirportManagement.Service.Repository.Entities.Airport airport, CancellationToken cancellationToken);
    Task<Result<AirportManagement.Service.Repository.Entities.Terminal>> AddTerminalAsync(Guid airportId, AirportManagement.Service.Repository.Entities.Terminal terminal, CancellationToken cancellationToken);
    Task<Result> DeleteAirportAsync(Guid airportId, CancellationToken cancellationToken);
}