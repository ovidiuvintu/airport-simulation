using Airport.Service.Apis;
using AirportSimulation.ServiceDefaults;
using Serilog;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();

var builder = WebApplication.CreateBuilder(args);

builder.AddServiceDefaults();

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
var withApiVersioning = builder.Services.AddApiVersioning();
builder.AddDefaultOpenApi(withApiVersioning);

var app = builder.Build();

app.MapDefaultEndpoints();

app.UseStatusCodePages();

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
});

app.Run();
