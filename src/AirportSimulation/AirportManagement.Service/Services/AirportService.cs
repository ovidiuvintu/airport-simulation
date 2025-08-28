using Infrastructure;
using Infrastructure.Interfaces;

namespace AirportManagement.Service.Services;

public class AirportService(IRepository<Repository.Entities.Airport> repo) : IAirportService
{
    private readonly IRepository<Repository.Entities.Airport> _repo = repo;

    public async Task<Result<Repository.Entities.Airport>> AddAirportAsync(Repository.Entities.Airport model)
    {
        try
        {
            ValidateModel(model);
            var items = await _repo.GetAllAsync();
            if (items != null && items.Any(item=>item.AirportCode == model.AirportCode))
            {
                return new()
                {
                    Success = false,
                    Error = "Item already exists",
                    Data = model,
                };
            }

            var result = await _repo.AddAsync(model);
            return new()
            {
                Success = result != 0,
                Error = result == 0 ? $"An error occurred while adding {model.Name} model" : string.Empty,
                Data = model               
            };
        }
        catch
        {
            throw;
        }            
    }

    public async  Task<Result<Repository.Entities.Airport>> GetAirportByCodeAsync(string code, CancellationToken cancellationToken)
    {
        var result = await _repo.GetAllAsync();
        var item = result.FirstOrDefault(c => c?.AirportCode == code);
        return new()
        {
            Success = item != null,
            Error = item == null ? $"Airport with code {code} not found" : string.Empty,
            Data = result.FirstOrDefault(c=>c?.AirportCode == code)
        };
    }

    public async Task<Result<Repository.Entities.Airport>> GetAirportByNameAsync(string name, CancellationToken cancellationToken)
    {
        var result = await _repo.GetAllAsync();
        Result<Repository.Entities.Airport> res = new()
        {
            Success = result != null,
            Error = string.Empty,
            Data = result.FirstOrDefault(c=>c?.Name == name)
        };

        return res;
    }

    public async Task<Result<IEnumerable<Repository.Entities.Airport>>> GetAllAirportsAsync(CancellationToken cancellationToken)
    {
        var result = await _repo.GetAllAsync();
        Result<IEnumerable<Repository.Entities.Airport>> res = new()
        {
            Success = result != null,
            Error = string.Empty,
            Data = result
        };

        return res;
    }

    public async Task<Result<Repository.Entities.Airport>> UpdateAirportAsync(Repository.Entities.Airport model, CancellationToken cancellationToken)
    {
        ValidateModel(model);
        var result = await _repo.GetAllAsync();
        if (result != null)
        {
            if (result.Any())
            {
                var airportToUpdate = result.FirstOrDefault(airport => airport.Id == airport.Id);
                if (airportToUpdate != null)
                {
                    await _repo.Update(model);
                    return new()
                    {
                        Success = true,
                        Error = string.Empty
                    };
                }
            }
            else
            {
                return new()
                {
                    Success = false,
                    Error = $"Airport {model.Name} not found"
                };
            }
        }

        return new()
        {
            Success = false,
            Error = ""
        };
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
