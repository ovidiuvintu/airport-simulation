using FlightSchedule.Api;
using FlightSchedule.Api.Application.Queries;
using FlightSchedule.Api.Application.Scheduler;
using FlightSchedule.Api.Repositories;
using Microsoft.EntityFrameworkCore;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<IArrivingFlightsQueries, ArrivingFlightsQueries>();
builder.Services.AddSingleton<IDepartingFlightsQueries, DepartingFlightsQueries>();

builder.Services.AddHostedService<FlightsSchedulerProcessor>();

builder.Services.AddDbContext<FlightsDbContext>(options =>
    options.UseSqlite(builder.Configuration["ConnectionStrings:FlightScheduleDb"]),
    ServiceLifetime.Singleton);

var withApiVersioning = builder.Services.AddApiVersioning();
builder.AddDefaultOpenApi(withApiVersioning);
builder.Host.UseSerilog((context, configuration) =>
    configuration.ReadFrom.Configuration(context.Configuration));


var app = builder.Build();

app.UseSerilogRequestLogging();
//app.UseHttpsRedirection();
app.MapAirlinesApi();
app.MapFlightsApi();
app.UseDefaultOpenApi();

await app.RunAsync();