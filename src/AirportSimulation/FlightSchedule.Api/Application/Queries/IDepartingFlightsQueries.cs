using FlightSchedule.Api.Models;

namespace FlightSchedule.Api.Application.Queries;

public interface IDepartingFlightsQueries
{
    Task<IEnumerable<DepartingFlight>> GetDepartingFlightsAsync();
    Task<DepartingFlight?> GetDepartureFlightDetailsAsync(string number);
}
