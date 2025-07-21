using Airport.Service.Apis;
using Airport.Service.Repository;
using AirportSimulation.ServiceDefaults;
using Infrastructure;
using Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;
using Serilog;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();


var builder = WebApplication.CreateBuilder(args);

builder.AddServiceDefaults();

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
