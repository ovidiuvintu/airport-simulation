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
}
