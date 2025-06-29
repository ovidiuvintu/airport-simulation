using FlightSchedule.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace FlightSchedule.Api.Repositories;

public sealed class FlightsDbContext(DbContextOptions<FlightsDbContext> options) : DbContext(options)
{
    public DbSet<DepartingFlight> Arrivals { get; set; }

    public DbSet<DepartingFlight> Departures { get; set; }
}
