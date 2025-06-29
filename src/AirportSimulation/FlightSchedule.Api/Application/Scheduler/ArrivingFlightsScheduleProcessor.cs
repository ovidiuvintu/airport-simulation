
using FlightSchedule.Api.Application.Queries;

namespace FlightSchedule.Api.Application.Scheduler;

public class ArrivingFlightsSchedulerProcessor : IHostedLifecycleService
{
    private readonly IArrivingFlightsQueries _arrivingFlightsQueries;
    private readonly ILogger<ArrivingFlightsSchedulerProcessor> _logger;

    public ArrivingFlightsSchedulerProcessor(IArrivingFlightsQueries arrivingFlights,
                                             ILogger<ArrivingFlightsSchedulerProcessor> logger)
    {
        _arrivingFlightsQueries = arrivingFlights;
        _logger = logger;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("ArrivingFlightsSchedulerProcessor start");
        await Task.CompletedTask;
    }

    public async Task StartedAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("ArrivingFlightsSchedulerProcessor started");
        await Task.CompletedTask;
    }

    public async Task StartingAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("ArrivingFlightsSchedulerProcessor starting");
        await Task.CompletedTask;
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("ArrivingFlightsSchedulerProcessor stop");
        await Task.CompletedTask;
    }

    public async Task StoppedAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("ArrivingFlightsSchedulerProcessor stopped");
        await Task.CompletedTask;
    }

    public async Task StoppingAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("ArrivingFlightsSchedulerProcessor stopping");
        await Task.CompletedTask;
    }
}
