using FlightSchedule.Api;
using FlightSchedule.Api.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("TodoDb");
builder.Services.AddDbContext<FlightsDbContext>(options =>
        options.UseSqlite(connectionString));

var withApiVersioning = builder.Services.AddApiVersioning();
builder.AddDefaultOpenApi(withApiVersioning);

var app = builder.Build();

app.UseHttpsRedirection();
app.MapAirlinesApi();
app.MapFlightsApi();
app.UseDefaultOpenApi();
app.Run();