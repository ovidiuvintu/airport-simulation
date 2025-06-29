using FlightSchedule.Api.Models;

namespace FlightSchedule.Api.Application.Queries;

public class ArrivingFlightQueries : IFlightQueries
{
    public Task<DepartingFlight> GetFlightDetailsAsync(string number)
    {
        throw new NotImplementedException();
    }
}
