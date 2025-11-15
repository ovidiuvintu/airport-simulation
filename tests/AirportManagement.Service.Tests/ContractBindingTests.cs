using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using AirportSimulation.ServiceDefaults;
using AirportManagement.Service.Apis;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using AirportManagement.Service.Repository;
using AirportManagement.Service.Services;
using Infrastructure;
using Infrastructure.Interfaces;
using MediatR;
using Xunit;

namespace AirportManagement.Service.Tests;

public class ContractBindingTests
{
    [Fact]
    public async Task GetAirportTerminals_BindsGuidParameter_ReturnsOk()
    {
        var builder = WebApplication.CreateBuilder();
        builder.WebHost.UseTestServer();

        // Mirror minimal startup used by the real app so route mapping extensions are available
        builder.AddServiceDefaults();
        var withApiVersioning = builder.Services.AddApiVersioning();
        builder.AddDefaultOpenApi(withApiVersioning);

        // Register DB, repository, services and MediatR handlers so tests exercise real handlers
        var connection = new SqliteConnection("DataSource=:memory:");
        connection.Open();
        builder.Services.AddDbContext<AirportContext>(opts => opts.UseSqlite(connection));
        builder.Services.AddScoped<DbContext, AirportContext>();
        builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
        builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        builder.Services.AddTransient<IAirportService, AirportService>();
        builder.Services.AddMediatR(typeof(AirportManagement.Service.Commands.CreateAirportCommand).Assembly);

        var app = builder.Build();

        // Map the airport API endpoints from the production code
        app.MapAirportApi();

        await app.StartAsync();

        var client = app.GetTestClient();

        var id = Guid.NewGuid();

        // ensure db created (no seed required for terminals endpoint in current implementation)
        using (var scope = app.Services.CreateScope())
        {
            var ctx = scope.ServiceProvider.GetRequiredService<AirportContext>();
            ctx.Database.EnsureCreated();
        }

        var resp = await client.GetAsync($"/api/airportspecification/airports/{id}/terminals?api-version=1.0");

        Assert.Equal(HttpStatusCode.OK, resp.StatusCode);
    }

    [Fact]
    public async Task Post_AddAirport_ReturnsCreated()
    {
        var builder = WebApplication.CreateBuilder();
        builder.WebHost.UseTestServer();

        builder.AddServiceDefaults();
        var withApiVersioning = builder.Services.AddApiVersioning();
        builder.AddDefaultOpenApi(withApiVersioning);

        // Register real MediatR and DB as above
        var connection = new SqliteConnection("DataSource=:memory:");
        connection.Open();
        builder.Services.AddDbContext<AirportContext>(opts => opts.UseSqlite(connection));
        builder.Services.AddScoped<DbContext, AirportContext>();
        builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
        builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        builder.Services.AddTransient<IAirportService, AirportService>();
        builder.Services.AddMediatR(typeof(AirportManagement.Service.Commands.CreateAirportCommand).Assembly);

        var app = builder.Build();
        app.MapAirportApi();

        // create database
        using (var scope = app.Services.CreateScope())
        {
            var ctx = scope.ServiceProvider.GetRequiredService<AirportContext>();
            ctx.Database.EnsureCreated();
        }

        await app.StartAsync();

        var client = app.GetTestClient();

        var json = System.Text.Json.JsonSerializer.Serialize(new
        {
            Name = "Test Airport",
            Description = "desc",
            AirportCode = "TST",
            Terminals = new object[] { }
        });

        var resp = await client.PostAsync($"/api/airportspecification/airports?api-version=1.0",
            new System.Net.Http.StringContent(json, System.Text.Encoding.UTF8, "application/json"));

        Assert.Equal(HttpStatusCode.Created, resp.StatusCode);
    }

    [Fact]
    public async Task Put_UpdateAirport_ReturnsOk()
    {
        var builder = WebApplication.CreateBuilder();
        builder.WebHost.UseTestServer();

        builder.AddServiceDefaults();
        var withApiVersioning = builder.Services.AddApiVersioning();
        builder.AddDefaultOpenApi(withApiVersioning);

        // Register real MediatR and DB
        var connection = new SqliteConnection("DataSource=:memory:");
        connection.Open();
        builder.Services.AddDbContext<AirportContext>(opts => opts.UseSqlite(connection));
        builder.Services.AddScoped<DbContext, AirportContext>();
        builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
        builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        builder.Services.AddTransient<IAirportService, AirportService>();
        builder.Services.AddMediatR(typeof(AirportManagement.Service.Commands.CreateAirportCommand).Assembly);

        var app = builder.Build();
        app.MapAirportApi();

        // create database and seed an airport to update
        Guid id;
        using (var scope = app.Services.CreateScope())
        {
            var ctx = scope.ServiceProvider.GetRequiredService<AirportContext>();
            ctx.Database.EnsureCreated();
            var airport = new AirportManagement.Service.Repository.Entities.Airport
            {
                Name = "Existing Airport",
                Description = "desc",
                AirportCode = "EXS",
                Terminals = new List<AirportManagement.Service.Repository.Entities.Terminal>()
            };
            ctx.Airports.Add(airport);
            await ctx.SaveChangesAsync();
            id = airport.Id;
        }

        await app.StartAsync();

        var client = app.GetTestClient();

        var json = System.Text.Json.JsonSerializer.Serialize(new
        {
            Name = "Updated Airport",
            Description = "desc",
            AirportCode = "UPD",
            Terminals = new object[] { }
        });

        var resp = await client.PutAsync($"/api/airportspecification/airports/{id}?api-version=1.0",
            new System.Net.Http.StringContent(json, System.Text.Encoding.UTF8, "application/json"));

        Assert.Equal(HttpStatusCode.OK, resp.StatusCode);
    }
}
