using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using static Grpc.Core.Metadata;

namespace Airport.Scheduler.Data;

public sealed class ScheduleDbContext(DbContextOptions<ScheduleDbContext> options) : DbContext(options)
{
    public DbSet<ArrivingFlight> ArrivingFlights { get; set; }
    public DbSet<DepartingFlight> DepartingFlights { get; set; }
    public DbSet<Carrier> Carrier { get; set; }
    public DbSet<Airport> Airport { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ArrivingFlight>()
           .OwnsOne(c => c.Origin, origin =>
           {
               origin.Property(c => c.AirportName).HasColumnName("CarrierName").IsRequired();
               origin.Property(c => c.AirportCode).HasColumnName("AirportCode").IsRequired();
               origin.Property(c => c.AirportDescription).HasColumnName("CarrierDescription");
           });

        modelBuilder.Entity<ArrivingFlight>()
           .OwnsOne(c => c.Destination, destination =>
           {
               destination.Property(c => c.AirportName).HasColumnName("CarrierName").IsRequired();
               destination.Property(c => c.AirportCode).HasColumnName("AirportCode").IsRequired();
               destination.Property(c => c.AirportDescription).HasColumnName("CarrierDescription");
           });

        modelBuilder.Entity<ArrivingFlight>()
            .OwnsOne(c => c.Carrier, carrier =>
            {
                carrier.Property(c => c.CarrierName).HasColumnName("CarrierName").IsRequired();
                carrier.Property(c => c.CarrierCode).HasColumnName("CarrierCode").IsRequired();
                carrier.Property(c => c.CarrierDescription).HasColumnName("CarrierDescription");
            });

        modelBuilder.Entity<DepartingFlight>()
            .OwnsOne(c => c.Origin, origin =>
            {
                origin.Property(c => c.AirportName).HasColumnName("CarrierName").IsRequired();
                origin.Property(c => c.AirportCode).HasColumnName("AirportCode").IsRequired();
                origin.Property(c => c.AirportDescription).HasColumnName("CarrierDescription");
            });

        modelBuilder.Entity<DepartingFlight>()
           .OwnsOne(c => c.Destination, destination =>
           {
               destination.Property(c => c.AirportName).HasColumnName("CarrierName").IsRequired();
               destination.Property(c => c.AirportCode).HasColumnName("AirportCode").IsRequired();
               destination.Property(c => c.AirportDescription).HasColumnName("CarrierDescription");
           });

        modelBuilder.Entity<DepartingFlight>()
            .OwnsOne(c => c.Carrier, carrier =>
            {
                carrier.Property(c => c.CarrierName).HasColumnName("CarrierName").IsRequired();
                carrier.Property(c => c.CarrierCode).HasColumnName("CarrierCode").IsRequired();
                carrier.Property(c => c.CarrierDescription).HasColumnName("CarrierDescription");
            });

        //new CarrierMap(modelBuilder.Entity<Carrier>());
        //new AirportMap(modelBuilder.Entity<Airport>());
        new ArrivingFlightMap(modelBuilder.Entity<ArrivingFlight>());
        new DepartingFlightMap(modelBuilder.Entity<DepartingFlight>());
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

    public class AirportMap
    {
        public AirportMap(EntityTypeBuilder<Airport> entityBuilder)
        {
            entityBuilder.ToTable("Airport");
            entityBuilder.Property(s => s.Id).IsRequired();
        }
    }
}
