
using FlightSchedule.Api.Application.Queries;

namespace FlightSchedule.Api.Application.Scheduler;

public class ArrivingFlightsSchedulerProcessor : IHostedLifecycleService
{
    private readonly IArrivingFlightsQueries _arrivingFlightsQueries;
    private readonly ILogger<ArrivingFlightsSchedulerProcessor> _logger;
    private PeriodicTimer _timer = new(TimeSpan.FromSeconds(1));

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
        try
        {
            _ = Task.Run(async () =>
            {
                while (await _timer.WaitForNextTickAsync(cancellationToken).ConfigureAwait(false) && !cancellationToken.IsCancellationRequested)
                {
                    var arrivingFlights = await _arrivingFlightsQueries.GetArrivingFlightsAsync(DateTime.Now, DateTime.Now.AddMinutes(5.0));
                    foreach (var flight in arrivingFlights)
                    {
                        _logger.LogInformation("ArrivingFlightsSchedulerProcessor Current Time:{0} Flight:{1}", DateTime.Now, flight.From);
                    }
                }
            });
        }
        catch (OperationCanceledException exception)
        {
            _logger.LogError(exception, "");
        }
        catch (Exception exception)
        {
            _logger.LogError(exception, "");
        }

        await Task.CompletedTask;
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("ArrivingFlightsSchedulerProcessor stop");
        if (_timer != null)
        {
            _timer.Dispose();
        }

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
