using Infrastructure;

namespace Airport.Service.Services
{
    public interface IAirportService
    {
        Task<Result<Repository.Entities.Airport>> AddAirportAsync(Repository.Entities.Airport model);
        Task<Result<Repository.Entities.Airport>> GetAirportByCodeAsync(string code, CancellationToken cancellationToken);
        Task<Result<Repository.Entities.Airport>> GetAirportByNameAsync(string name, CancellationToken cancellationToken);
    }
}