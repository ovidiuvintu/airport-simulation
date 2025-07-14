using Airport.Scheduler.Data;
using Airport.Endpoints;
using Airport.Scheduler.Moldel;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ScheduleDbContext>(options
             => options.UseSqlite(builder.Configuration.GetConnectionString("Database")));

builder.AddServiceDefaults();

// Add services to the container.
builder.Services.AddProblemDetails();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddEndpointsApiExplorer();

// Add schedule services
builder.Services.AddScoped<IScheduleServices, ScheduleServices>();

var app = builder.Build();

app.UseExceptionHandler();

app.MapDefaultEndpoints();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference(options =>
    {
        options
            .WithTitle("Airport")
            .WithClientButton(true)
            .WithDefaultHttpClient(ScalarTarget.JavaScript, ScalarClient.Axios);
    });
}

app.UseHttpsRedirection();

app.MapGroup("/api/v1")
   .MapScheduleEndpoints();

app.Lifetime.ApplicationStarted.Register(() =>
{
    Console.WriteLine("Application started");
});

app.Lifetime.ApplicationStopping.Register(() =>
{
    Console.WriteLine("Application stopping");
});

app.Run();
