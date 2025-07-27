using AirportSimulation.ServiceDefaults;
using Serilog;
using Taxi.Service.Apis;

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

app.MapTaxiApi();

app.UseDefaultOpenApi();

app.Lifetime.ApplicationStarted.Register(() =>
{
    Log.Information("Taxi service started");
});

app.Lifetime.ApplicationStopping.Register(() =>
{
    Log.Information("Taxi service stoping");
});

app.Lifetime.ApplicationStopped.Register(() =>
{
    Log.Information("Taxi service stopped");
});

app.Run();