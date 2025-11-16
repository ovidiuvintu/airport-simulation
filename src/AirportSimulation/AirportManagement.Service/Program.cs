using AirportManagement.Service.Apis;
using AirportManagement.Service.Repository;
using AirportManagement.Service.Services;
using AirportSimulation.ServiceDefaults;
using Infrastructure;
using Infrastructure.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Serilog;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();


var builder = WebApplication.CreateBuilder(args);

builder.AddServiceDefaults();

// global exception handlers to catch unexpected shutdown causes
AppDomain.CurrentDomain.UnhandledException += (s, e) =>
{
    try
    {
        Log.Fatal((Exception?)e.ExceptionObject, "Unhandled domain exception");
    }
    catch { }
};

TaskScheduler.UnobservedTaskException += (s, e) =>
{
    try
    {
        Log.Fatal(e.Exception, "Unobserved task exception");
    }
    catch { }
};

var withApiVersioning = builder.Services.AddApiVersioning();
builder.AddDefaultOpenApi(withApiVersioning);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
        ?? throw new InvalidOperationException("Connection string"
        + "'DefaultConnection' not found.");

builder.Services.AddDbContext<AirportContext>(options =>
    options.UseSqlite(connectionString));

builder.Services.AddScoped<DbContext, AirportContext>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped(typeof(IRepository<>), 
                           typeof(Repository<>));

builder.Services.AddTransient<IAirportService, AirportService>();
builder.Services.AddMediatR(typeof(Program).Assembly); 
// Keep the host alive (diagnostic); prevents premature exit while we diagnose shutdown cause
// Temporarily disabled for smoke tests because DiagnosticShutdownService reacts to SIGINT/Ctrl+C
// and causes the host to stop during automated smoke runs. Revert these lines after testing.
builder.Services.AddHostedService<KeepAliveService>();
builder.Services.AddSingleton<DiagnosticShutdownService>();
builder.Services.AddHostedService(provider => provider.GetRequiredService<DiagnosticShutdownService>());


var app = builder.Build();

app.MapDefaultEndpoints();

app.UseStatusCodePages();

// Log request bodies for JSON/merge-patch requests to help diagnose intermittent 400s
// Controlled by `ENABLE_REQUEST_BODY_LOG` env var (set to "true" to enable).
var enableReqLog = Environment.GetEnvironmentVariable("ENABLE_REQUEST_BODY_LOG");
if (string.Equals(enableReqLog, "true", StringComparison.OrdinalIgnoreCase))
{
    app.UseMiddleware<RequestBodyLoggingMiddleware>();
}

app.MapAirportApi();

app.UseDefaultOpenApi();

app.Lifetime.ApplicationStarted.Register(() =>
{
    Log.Information("Airport service started");
});

app.Lifetime.ApplicationStopping.Register(() =>
{
    Log.Information("Airport service stoping");
});

app.Lifetime.ApplicationStopped.Register(() =>
{
    Log.Information("Airport service stopped");
    // flush logs on stop
    Log.CloseAndFlush();
});

Log.Information("Entering app.Run()");
try
{
    // Prevent accidental console Ctrl+C from terminating the host during local debugging.
    Console.CancelKeyPress += (s, e) =>
    {
        Log.Warning("Console.CancelKeyPress received (Ctrl+C). Suppressing shutdown for diagnostics.");
        e.Cancel = true; // prevent process termination
    };

    // If Posix signals are supported, register handlers to cancel the default termination behavior
    try
    {
        // Use runtime API if available; on some platforms this will register for SIGTERM/SIGINT
        System.Runtime.InteropServices.PosixSignalRegistration.Create(
            System.Runtime.InteropServices.PosixSignal.SIGTERM,
            ctx => {
                Log.Warning("SIGTERM received; suppressing termination for diagnostics.");
                ctx.Cancel = true;
            });

        System.Runtime.InteropServices.PosixSignalRegistration.Create(
            System.Runtime.InteropServices.PosixSignal.SIGINT,
            ctx => {
                Log.Warning("SIGINT received; suppressing termination for diagnostics.");
                ctx.Cancel = true;
            });
    }
    catch (Exception ex)
    {
        // PosixSignalRegistration may not be supported on all runtimes; log and continue
        Log.Debug(ex, "Posix signal registration unavailable or failed; continuing without signal suppression.");
    }

    app.Run();
}
finally
{
    Log.Information("app.Run() has returned; application shutting down");
    Log.CloseAndFlush();
}

// Support WebApplicationFactory testing (exposes Program type)
public partial class Program { }
