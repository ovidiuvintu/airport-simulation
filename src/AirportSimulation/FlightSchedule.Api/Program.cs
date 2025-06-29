using FlightSchedule.Api;
using FlightSchedule.Api.Application.Queries;
using FlightSchedule.Api.Application.Scheduler;
using FlightSchedule.Api.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<IArrivingFlightsQueries, ArrivingFlightsQueries>();
builder.Services.AddSingleton<IDepartingFlightsQueries, DepartingFlightsQueries>();

builder.Services.AddHostedService<ArrivingFlightsSchedulerProcessor>();
builder.Services.AddHostedService<DepartingFlightsSchedulerProcessor>();

builder.Services.AddDbContext<FlightsDbContext>(options =>
    options.UseSqlite(builder.Configuration["ConnectionStrings:FlightScheduleDb"]),
    ServiceLifetime.Singleton);

var withApiVersioning = builder.Services.AddApiVersioning();
builder.AddDefaultOpenApi(withApiVersioning);       

var app = builder.Build();

//app.UseHttpsRedirection();
app.MapAirlinesApi();
app.MapFlightsApi();
app.UseDefaultOpenApi();

app.Run();