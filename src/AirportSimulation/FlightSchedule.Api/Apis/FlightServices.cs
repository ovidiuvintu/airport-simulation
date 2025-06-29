using FlightSchedule.Api.Application.Queries;
using MediatR;

namespace FlightSchedule.Api;

public class FlightServices(
    IMediator mediator,
    IFlightQueries queries,
    ILogger<FlightServices> logger)
{
    public IMediator Mediator { get; set; } = mediator;
    public ILogger<FlightServices> Logger { get; } = logger;
    public IFlightQueries Queries { get; } = queries;
}