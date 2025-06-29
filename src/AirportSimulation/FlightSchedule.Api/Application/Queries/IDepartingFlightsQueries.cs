using FlightSchedule.Api.Models;

namespace FlightSchedule.Api.Application.Queries;

public interface IDepartingFlightsQueries
{
    Task<DepartingFlight> GetDepartingFlightDetailsAsync();
    Task<DepartingFlight> GetDepartingFlightDetailsAsync(string number);
}
