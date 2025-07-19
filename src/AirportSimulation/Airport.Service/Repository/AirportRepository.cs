using Ardalis.Specification.EntityFrameworkCore;
using Infrastructure.Interfaces;

namespace Airport.Service.Repository;

public class AirportRepository<T> : RepositoryBase<T>, IRepository<T> where T : class
{
    public AirportRepository(AirportContext dbContext) : base(dbContext)
    {
    }
}