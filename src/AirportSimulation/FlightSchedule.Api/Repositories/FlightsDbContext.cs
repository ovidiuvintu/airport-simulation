using FlightSchedule.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace FlightSchedule.Api.Repositories;

public sealed class FlightsDbContext : DbContext
{
    public FlightsDbContext(DbContextOptions<FlightsDbContext> options) : base(options) { }

    public DbSet<Flight> Arrivals { get; set; }

    public DbSet<Flight> Departures { get; set; }
}
