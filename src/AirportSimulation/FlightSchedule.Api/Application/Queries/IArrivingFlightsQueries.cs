using FlightSchedule.Api.Models;

namespace FlightSchedule.Api.Application.Queries;

public interface IArrivingFlightsQueries
{
    Task<IEnumerable<ArrivingFlight>> GetArrivingFlightsAsync();
    Task<ArrivingFlight?> GetArrivingFlightDetailsAsync(string number);
}
