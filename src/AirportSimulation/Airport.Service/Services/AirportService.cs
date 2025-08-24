using Infrastructure;
using Infrastructure.Interfaces;

namespace Airport.Service.Services;

public class AirportService(IRepository<Repository.Entities.Airport> repo) : IAirportService
{
    private readonly IRepository<Repository.Entities.Airport> _repo = repo;

    public async Task<Result<Repository.Entities.Airport>> AddAirportAsync(Repository.Entities.Airport model)
    {
        try
        {
            ValidateModel(model);
            var result = await _repo.AddAsync(model);
            Result<Repository.Entities.Airport> res = new()
            {
                Success = result != 0,
                Error = string.Empty,
                Data = model               
            };
            return res;
        }
        catch (Exception)
        {
            throw;
        }            
    }

    public async  Task<Result<Repository.Entities.Airport>> GetAirportByCodeAsync(string code, CancellationToken cancellationToken)
    {
        var result = await _repo.GetAllAsync();
        Result<Repository.Entities.Airport> res = new()
        {
            Success = result != null,
            Error = string.Empty,
            Data = result.FirstOrDefault(c=>c.AirportCode == code)
        };
        return res;
    }

    public async Task<Result<Repository.Entities.Airport>> GetAirportByNameAsync(string name, CancellationToken cancellationToken)
    {
        var result = await _repo.GetAllAsync();
        Result<Repository.Entities.Airport> res = new()
        {
            Success = result != null,
            Error = string.Empty,
            Data = result.FirstOrDefault(c => c.Name == name)
        };
        return res;
    }

    public void ValidateModel(Repository.Entities.Airport model)
    {
        ArgumentNullException.ThrowIfNull(model);

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
