using Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace AirportManagement.Service.Repository;

public class AirportRepository(DbContext dbContext) : Repository<AirportManagement.Service.Repository.Entities.Airport>(dbContext)
{
}