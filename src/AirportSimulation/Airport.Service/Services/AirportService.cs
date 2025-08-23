using Infrastructure;
using Infrastructure.Interfaces;

namespace Airport.Service.Services;

public class AirportService : IAirportService
{
    private readonly IRepository<Repository.Entities.Airport> _repo;

    public AirportService(IRepository<Repository.Entities.Airport> repo)
    {
        _repo = repo;
    }

    public async Task<Result> AddAirportAsync(Repository.Entities.Airport model)
    {
        try
        {
            ValidateModel(model);
            var result = await _repo.AddAsync(model);
            Result res = new Result();
            res.Success = result != 0;
            return res;
        }
        catch (Exception)
        {
            throw;
        }            
    }

    public void ValidateModel(Repository.Entities.Airport model)
    {
        if (model == null)
        {
            throw new ArgumentNullException(nameof(model));
        }

        if (string.IsNullOrEmpty(model.AirportCode))
        {
            throw new ArgumentException("AirportCode cannot be null or empty", nameof(model));
        }

        if (string.IsNullOrEmpty(model.Name))
        {
            throw new ArgumentException("AirportName cannot be null or empty", nameof(model));
        }
    }
}
