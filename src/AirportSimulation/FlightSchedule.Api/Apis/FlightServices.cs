using FlightSchedule.Api.Application.Queries;
using MediatR;

namespace FlightSchedule.Api;

public class FlightServices(
    IArrivingFlightsQueries arrivingFlightsQueries,
    IDepartingFlightsQueries departingFlightsQueries,
    ILogger<FlightServices> logger)
{
    public ILogger<FlightServices> Logger { get; } = logger;
    public IArrivingFlightsQueries ArrivingFlightsQueries { get; } = arrivingFlightsQueries;
    public IDepartingFlightsQueries DepartingFlightsQueries { get; } = departingFlightsQueries;
}