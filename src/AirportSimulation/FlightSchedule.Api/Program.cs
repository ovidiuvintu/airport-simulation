using FlightSchedule.Api;
using FlightSchedule.Api.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<FlightsDbContext>(options =>
    options.UseSqlite(builder.Configuration["ConnectionStrings:FlightScheduleDb"]),
    ServiceLifetime.Scoped);

var withApiVersioning = builder.Services.AddApiVersioning();
builder.AddDefaultOpenApi(withApiVersioning);

var app = builder.Build();

app.UseHttpsRedirection();
app.MapAirlinesApi();
app.MapFlightsApi();
app.UseDefaultOpenApi();
app.Run();