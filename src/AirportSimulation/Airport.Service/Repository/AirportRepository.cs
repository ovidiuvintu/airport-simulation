using Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace Airport.Service.Repository;

public class AirportRepository(DbContext dbContext) : Repository<Repository.Entities.Airport>(dbContext)
{
}