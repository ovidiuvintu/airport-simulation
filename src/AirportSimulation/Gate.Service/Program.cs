using AirportSimulation.ServiceDefaults;
using Gate.Service.Apis;
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

app.MapGateApi();

app.UseDefaultOpenApi();

app.Lifetime.ApplicationStarted.Register(() =>
{
    Log.Information("Gate service started");
});

app.Lifetime.ApplicationStopping.Register(() =>
{
    Log.Information("Gate service stoping");
});

app.Lifetime.ApplicationStopped.Register(() =>
{
    Log.Information("Gate service stopped");
});

app.Run();