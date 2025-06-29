using FlightSchedule.Api.Models;
using FlightSchedule.Api.Repositories;
using Microsoft.EntityFrameworkCore;

namespace FlightSchedule.Api.Application.Queries;

public class ArrivingFlightsQueries : IArrivingFlightsQueries
{
    private readonly FlightsDbContext _context;
    public ArrivingFlightsQueries(FlightsDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<ArrivingFlight>> GetArrivingFlightsAsync()
    {
        var arrivals = await _context.Arrivals.ToListAsync();
        return arrivals;
    }

    public async Task<ArrivingFlight?> GetArrivingFlightDetailsAsync(string number)
    {
        var arrivals = await _context.Arrivals.ToListAsync();
        return arrivals.FirstOrDefault(arrival => arrival.Flight == number);
    }

    public async Task<IEnumerable<ArrivingFlight>> GetArrivingFlightsAsync(DateTime start, DateTime end)
    {
        var arrivals = await _context.Arrivals.ToListAsync();
        return arrivals.Where(arrival => arrival.Time.TimeOfDay >= start.TimeOfDay && arrival.Time.TimeOfDay < end.TimeOfDay);
    }

    public Task<IEnumerable<ArrivingFlight>> GetArrivingFlightsAsync(string city)
    {
        throw new NotImplementedException();
    }
}
