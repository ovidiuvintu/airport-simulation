using FlightSchedule.Api.Models;
using FlightSchedule.Api.Repositories;
using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;

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

    public async Task<IEnumerable<DepartingFlight>> GetDepartingFlightsAsync(DateTime start, DateTime end)
    {
        var departures = await _context.Departures.ToListAsync();
        return departures.Where(departure => departure.Time.TimeOfDay >= start.TimeOfDay && departure.Time.TimeOfDay < end.TimeOfDay);
    }

    public async Task<IEnumerable<DepartingFlight>> GetDepartingFlightsAsync(string city)
    {
        var departures = await _context.Departures.Where(departure => departure.To == city).ToListAsync();
        return departures;
    }

    public async Task<DepartingFlight?> GetDepartureFlightDetailsAsync(string number)
    {
        var departures = await _context.Departures.Where(departure => departure.Flight == number).ToListAsync();
        return departures.FirstOrDefault(departure => departure.Flight == number);
    }
}
