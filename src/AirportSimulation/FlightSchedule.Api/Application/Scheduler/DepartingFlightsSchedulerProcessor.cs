
using FlightSchedule.Api.Application.Queries;

namespace FlightSchedule.Api.Application.Scheduler;

public class DepartingFlightsSchedulerProcessor : IHostedLifecycleService
{
    private readonly IDepartingFlightsQueries _departingFlightsQueries;
    private readonly ILogger<DepartingFlightsSchedulerProcessor> _logger;

    public DepartingFlightsSchedulerProcessor(IDepartingFlightsQueries arrivingFlights,
                                             ILogger<DepartingFlightsSchedulerProcessor> logger)
    {
        _departingFlightsQueries = arrivingFlights;
        _logger = logger;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("DepartingFlightsSchedulerProcessor start");
        await Task.CompletedTask;
    }

    public async Task StartedAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("DepartingFlightsSchedulerProcessor started");
        await Task.CompletedTask;
    }

    public async Task StartingAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("DepartingFlightsSchedulerProcessor starting");
        await Task.CompletedTask;
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("DepartingFlightsSchedulerProcessor stop");
        await Task.CompletedTask;
    }

    public async Task StoppedAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("DepartingFlightsSchedulerProcessor stopped");
        await Task.CompletedTask;
    }

    public async Task StoppingAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("DepartingFlightsSchedulerProcessor stopping");
        await Task.CompletedTask;
    }
}
