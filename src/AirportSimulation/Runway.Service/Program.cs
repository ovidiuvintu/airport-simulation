using AirportSimulation.ServiceDefaults;
using Runway.Service.Apis;
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

app.MapRunwayApi();


app.UseDefaultOpenApi();

app.Lifetime.ApplicationStarted.Register(() =>
{
    Log.Information("Runway service started");
});

app.Lifetime.ApplicationStopping.Register(() =>
{
    Log.Information("Runway service stoping");
});

app.Lifetime.ApplicationStopped.Register(() =>
{
    Log.Information("Runway service stopped");
});

app.Run();