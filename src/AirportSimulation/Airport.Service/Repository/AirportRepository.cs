using Infrastructure.Interfaces;

namespace Airport.Service.Repository;

public class AirportRepository<T> : IRepository<T> where T : class
{
    public AirportRepository(AirportContext dbContext)
    {
    }

    public void Dispose()
    {
        throw new NotImplementedException();
    }
}