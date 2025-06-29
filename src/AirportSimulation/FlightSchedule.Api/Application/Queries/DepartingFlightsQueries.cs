using FlightSchedule.Api.Models;
using FlightSchedule.Api.Repositories;
using Microsoft.EntityFrameworkCore;

namespace FlightSchedule.Api.Application.Queries;

public class DepartingFlightsQueries : IDepartingFlightsQueries
{
    private readonly FlightsDbContext _context;
    public DepartingFlightsQueries(FlightsDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<DepartingFlight>> GetDepartingFlightsAsync()
    {
        var departures = await _context.Departures.ToListAsync();
        return departures;
    }

    public async Task<DepartingFlight?> GetDepartureFlightDetailsAsync(string number)
    {
        var departures = await _context.Departures.ToListAsync();
        return departures.FirstOrDefault(departure => departure.Flight == number);
    }
}
