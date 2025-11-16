using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace AirportManagement.Service.Services;

internal sealed class KeepAliveService : BackgroundService
{
    private readonly ILogger<KeepAliveService> _logger;

    public KeepAliveService(ILogger<KeepAliveService> logger)
    {
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        _logger.LogInformation("KeepAliveService started; preventing premature shutdown while diagnosing.");
        try
        {
            await Task.Delay(Timeout.Infinite, stoppingToken);
        }
        catch (TaskCanceledException) { }
        _logger.LogInformation("KeepAliveService stopping");
    }
}
