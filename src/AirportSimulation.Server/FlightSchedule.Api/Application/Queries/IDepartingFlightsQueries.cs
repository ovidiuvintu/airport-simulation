using FlightSchedule.Api.Models;

namespace FlightSchedule.Api.Application.Queries;

public interface IDepartingFlightsQueries
{
    Task<IEnumerable<DepartingFlight>> GetDepartingFlightsAsync();
    Task<IEnumerable<DepartingFlight>> GetDepartingFlightsAsync(DateTime start, DateTime end);
    Task<DepartingFlight?> GetDepartureFlightDetailsAsync(string number);
    Task<IEnumerable<DepartingFlight>> GetDepartingFlightsAsync(string city);
}
