
using FlightSchedule.Api.Application.Queries;

namespace FlightSchedule.Api.Application.Scheduler;

public class FlightsSchedulerProcessor : IHostedLifecycleService
{
    private readonly IArrivingFlightsQueries _arrivingFlightsQueries;
    private readonly IDepartingFlightsQueries _departingFlightsQueries;
    private readonly ILogger<FlightsSchedulerProcessor> _logger;
    private PeriodicTimer _timer = new(TimeSpan.FromSeconds(1));

    public FlightsSchedulerProcessor(IDepartingFlightsQueries departingFlights,
                                              IArrivingFlightsQueries arrivingFlights,
                                             ILogger<FlightsSchedulerProcessor> logger)
    {
        _departingFlightsQueries = departingFlights;
        _arrivingFlightsQueries = arrivingFlights;
        _logger = logger;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("FlightsSchedulerProcessor start");
        await Task.CompletedTask;
    }

    public async Task StartedAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("FlightsSchedulerProcessor started");
        await Task.CompletedTask;
    }

    public async Task StartingAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("FlightsSchedulerProcessor starting");
        try
        {
            Task.Run(async () =>
            {
                while (await _timer.WaitForNextTickAsync(cancellationToken) && !cancellationToken.IsCancellationRequested)
                {
                    var departingFlights = await _departingFlightsQueries.GetDepartingFlightsAsync(DateTime.Now, DateTime.Now.AddMinutes(5.0));
                    foreach (var flight in departingFlights)
                    {
                        _logger.LogInformation("DepartingFlightsSchedulerProcessor Current Time:{0} Flight:{1}", DateTime.Now, flight.To);
                    }

                    var arrivingFlights = await _arrivingFlightsQueries.GetArrivingFlightsAsync(DateTime.Now, DateTime.Now.AddMinutes(5.0));
                    foreach (var flight in arrivingFlights)
                    {
                        _logger.LogInformation("ArrivingFlightsSchedulerProcessor Current Time:{0} Flight:{1}", DateTime.Now, flight.From);
                    }

                }
            }).Forget();
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
        _logger.LogInformation("FlightsSchedulerProcessor stop");
        if (_timer != null)
        {
            _timer.Dispose();
        }

        await Task.CompletedTask;
    }

    public async Task StoppedAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("FlightsSchedulerProcessor stopped");
        await Task.CompletedTask;
    }

    public async Task StoppingAsync(CancellationToken cancellationToken)
    {
        _logger.LogInformation("FlightsSchedulerProcessor stopping");
        await Task.CompletedTask;
    }
}
