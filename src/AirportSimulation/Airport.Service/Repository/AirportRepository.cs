using Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace Airport.Service.Repository;

public class AirportRepository : Repository<Repository.Entities.Airport>
{
    public AirportRepository(DbContext dbContext):base(dbContext)
    {
    }
}