using FlightSchedule.Api.Models;
using FlightSchedule.Api.Repositories;

namespace FlightSchedule.Api.Application.Queries
{
    public class DepartingFlightsQueries : IDepartingFlightsQueries
    {
        public DepartingFlightsQueries(FlightsDbContext context)
        {            
        }

        public Task<DepartingFlight> GetDepartingFlightDetailsAsync()
        {
            throw new NotImplementedException();
        }

        public Task<DepartingFlight> GetDepartingFlightDetailsAsync(string number)
        {
            throw new NotImplementedException();
        }
    }
}
