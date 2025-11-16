using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace AirportManagement.Service.Services;

/// <summary>
/// Logs diagnostic information when the host is shutting down to help
/// identify the caller/context that requested shutdown.
/// </summary>
internal sealed class DiagnosticShutdownService : IHostedService
{
    private readonly IHostApplicationLifetime _lifetime;
    private readonly ILogger<DiagnosticShutdownService> _logger;

    public DiagnosticShutdownService(IHostApplicationLifetime lifetime, ILogger<DiagnosticShutdownService> logger)
    {
        _lifetime = lifetime;
        _logger = logger;
    }

    public Task StartAsync(CancellationToken cancellationToken)
    {
        _lifetime.ApplicationStopping.Register(OnStopping);
        _lifetime.ApplicationStopped.Register(OnStopped);
        AppDomain.CurrentDomain.ProcessExit += OnProcessExit;
        return Task.CompletedTask;
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        AppDomain.CurrentDomain.ProcessExit -= OnProcessExit;
        return Task.CompletedTask;
    }

    private void OnStopping()
    {
        try
        {
            _logger.LogWarning("ApplicationStopping triggered at {Time}. Capturing diagnostic info...", DateTime.UtcNow);
            _logger.LogWarning("Environment.StackTrace:\n{Stack}", Environment.StackTrace);
            // Log a small heap snapshot-ish detail
            _logger.LogWarning("GC Memory (bytes): {Memory}", GC.GetTotalMemory(false));
        }
        catch (Exception ex)
        {
            try { _logger.LogError(ex, "Error capturing shutdown diagnostics"); } catch { }
        }
    }

    private void OnStopped()
    {
        try
        {
            _logger.LogWarning("ApplicationStopped triggered at {Time}", DateTime.UtcNow);
        }
        catch { }
    }

    private void OnProcessExit(object? sender, EventArgs e)
    {
        try
        {
            _logger.LogWarning("ProcessExit event fired at {Time}. Environment.StackTrace:\n{Stack}", DateTime.UtcNow, Environment.StackTrace);
        }
        catch { }
    }
}
