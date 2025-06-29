
using FlightSchedule.Api.Application.Queries;

namespace FlightSchedule.Api.Application.Scheduler;

public class DepartingFlightsSchedulerProcessor : IHostedLifecycleService
{
    private readonly IDepartingFlightsQueries _departingFlightsQueries;
    private readonly ILogger<DepartingFlightsSchedulerProcessor> _logger;
    private PeriodicTimer _timer = new(TimeSpan.FromSeconds(1));

    public DepartingFlightsSchedulerProcessor(IDepartingFlightsQueries departingFlights,
                                             ILogger<DepartingFlightsSchedulerProcessor> logger)
    {
        _departingFlightsQueries = departingFlights;
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
        try
        {
            _ = Task.Run(async () =>
            {
                while (await _timer.WaitForNextTickAsync(cancellationToken).ConfigureAwait(false) && !cancellationToken.IsCancellationRequested)
                {
                    var departingFlights = await _departingFlightsQueries.GetDepartingFlightsAsync(DateTime.Now, DateTime.Now.AddMinutes(5.0));
                    foreach (var flight in departingFlights)
                    {
                        _logger.LogInformation("DepartingFlightsSchedulerProcessor Current Time:{0} Flight:{1}", DateTime.Now, flight.To);
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
        _logger.LogInformation("DepartingFlightsSchedulerProcessor stop");
        if (_timer != null)
        {
            _timer.Dispose();
        }

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
