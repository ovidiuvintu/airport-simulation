using Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace AirportManagement.Service.Repository;

public class AirportRepository(DbContext dbContext) : 
    Repository<Entities.Airport>(dbContext)
{
}