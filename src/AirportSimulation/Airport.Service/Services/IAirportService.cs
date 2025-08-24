using Infrastructure;

namespace Airport.Service.Services
{
    public interface IAirportService
    {
        Task<Result<Repository.Entities.Airport>> AddAirportAsync(Repository.Entities.Airport model);
    }
}