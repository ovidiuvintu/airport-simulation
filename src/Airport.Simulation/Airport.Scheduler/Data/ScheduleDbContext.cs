using Airport.Scheduler.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Airport.Data;

public sealed class ScheduleDbContext(DbContextOptions<ScheduleDbContext> options) : DbContext(options)
{
    public DbSet<ArrivingFlight> ArrivingFlights { get; set; }
    public DbSet<DepartingFlight> DepartingFlights { get; set; }
    public DbSet<Carrier> Carrier { get; set; }
    public DbSet<Airport> Airport { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        new ArrivingFlightMap(modelBuilder.Entity<ArrivingFlight>());
        new DepartingFlightMap(modelBuilder.Entity<DepartingFlight>());
        new CarrierMap(modelBuilder.Entity<Carrier>());
    }

    public class ArrivingFlightMap
    {
        public ArrivingFlightMap(EntityTypeBuilder<ArrivingFlight> entityBuilder)
        {
            entityBuilder.ToTable("ArrivingFlight");
            entityBuilder.Property(s => s.Id).IsRequired();
        }
    }

    public class DepartingFlightMap
    {
        public DepartingFlightMap(EntityTypeBuilder<DepartingFlight> entityBuilder)
        {
            entityBuilder.ToTable("DepartingFlight");
            entityBuilder.Property(s => s.Id).IsRequired();
        }
    }

    public class CarrierMap
    {
        public CarrierMap(EntityTypeBuilder<Carrier> entityBuilder)
        {
            entityBuilder.ToTable("Carrier");
            entityBuilder.Property(s => s.Id).IsRequired();
        }
    }
}
