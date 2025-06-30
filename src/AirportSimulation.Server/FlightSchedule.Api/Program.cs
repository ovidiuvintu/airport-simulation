using FlightSchedule.Api;
using FlightSchedule.Api.Application.Queries;
using FlightSchedule.Api.Application.Scheduler;
using FlightSchedule.Api.Repositories;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Serilog;
using Serilog.Core;

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

app.UseExceptionHandler(appError =>
{
    appError.Run(async context =>
    {
        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/json";

        var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
        if (contextFeature is not null)
        {
            Console.WriteLine(contextFeature.Error);
            await context.Response.WriteAsJsonAsync(new
            {
                StatusCode = context.Response.StatusCode,
                Message = "Internal Server Error"
            });
        }
    });
});

//app.UseHttpsRedirection();
app.MapAirlinesApi();
app.MapFlightsApi();
app.UseDefaultOpenApi();

await app.RunAsync();