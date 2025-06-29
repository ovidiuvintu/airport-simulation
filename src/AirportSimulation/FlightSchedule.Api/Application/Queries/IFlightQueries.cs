using FlightSchedule.Api.Models;

namespace FlightSchedule.Api.Application.Queries;

public interface IFlightQueries
{
    Task<DepartingFlight> GetFlightDetailsAsync(string number);
}
