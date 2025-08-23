using Infrastructure;

namespace Airport.Service.Services
{
    public interface IAirportService
    {
        Task<Result> AddAirportAsync(Repository.Entities.Airport model);
    }
}