using FlightSchedule.Api.Models;

namespace FlightSchedule.Api.Application.Queries;

public interface IArrivingFlightsQueries
{
    Task<IEnumerable<ArrivingFlight>> GetArrivingFlightsAsync();
    Task<IEnumerable<ArrivingFlight>> GetArrivingFlightsAsync(DateTime start, DateTime end);
    Task<ArrivingFlight?> GetArrivingFlightDetailsAsync(string number);
    Task<IEnumerable<ArrivingFlight>> GetArrivingFlightsAsync(string city);

}
