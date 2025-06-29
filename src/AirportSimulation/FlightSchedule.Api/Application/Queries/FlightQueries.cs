using FlightSchedule.Api.Models;

namespace FlightSchedule.Api.Application.Queries;

public class FlightQueries : IFlightQueries
{
    public Task<Flight> GetFlightDetailsAsync(string number)
    {
        throw new NotImplementedException();
    }
}
