using FlightSchedule.Api.Models;

namespace FlightSchedule.Api.Application.Queries;

public interface IFlightQueries
{
    Task<Flight> GetFlightDetailsAsync(string number);
}
