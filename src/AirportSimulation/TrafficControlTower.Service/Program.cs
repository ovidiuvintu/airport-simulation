using AirportSimulation.ServiceDefaults;
using Schedule.Service.Apis;
using Serilog;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();

var builder = WebApplication.CreateBuilder(args);

builder.AddServiceDefaults();

var withApiVersioning = builder.Services.AddApiVersioning();
builder.AddDefaultOpenApi(withApiVersioning);

var app = builder.Build();

app.MapDefaultEndpoints();

app.UseStatusCodePages();

app.MapScheduleApi();

app.UseDefaultOpenApi();

app.Lifetime.ApplicationStarted.Register(() =>
{
    Log.Information("Schedule service started");
});

app.Lifetime.ApplicationStopping.Register(() =>
{
    Log.Information("Schedule service stoping");
});

app.Lifetime.ApplicationStopped.Register(() =>
{
    Log.Information("Schedule service stopped");
});

app.Run();