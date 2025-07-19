using Microsoft.EntityFrameworkCore;

namespace Airport.Service.Repository;

public class AirportContext : DbContext
{
    public AirportContext(DbContextOptions<AirportContext> options) : base(options)
    {
    }
}
