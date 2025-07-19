
using Airport.Service.Entities;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Airport.Service.Apis;

public static class AirportApi
{
    public static IEndpointRouteBuilder MapAirportApi(this IEndpointRouteBuilder app)
    {
        var vApi = app.NewVersionedApi("Airport");
        var api = vApi.MapGroup("api/airport").HasApiVersion(1, 0);
        var v1 = vApi.MapGroup("api/airport").HasApiVersion(1, 0);

        v1.MapGet("/airports", GetAirportsAsync)
           .WithName("GetAirports")
           .WithSummary("List airports")
           .WithDisplayName("GetAllAirports")
           .WithDescription("Get a list of airports.")
           .WithTags("Airports");

        v1.MapGet("/airports/byname/{name:minlength(1)}", GetAirportsAsync)
           .WithName("GetAirportByName")
           .WithSummary("List airport by name")
           .WithDisplayName("GetAirport")
           .WithDescription("Get a list of airports.")
           .WithTags("Airports");

        v1.MapGet("/airports/byiatacode/{code:string}", GetAirportsAsync)
           .WithName("GetAirportByAirportCode")
           .WithSummary("List airport by name")
           .WithDisplayName("GetAllAirports")
           .WithDescription("Get a list of airports.")
           .WithTags("Airports");

        v1.MapPost("/airports", AddAirportAsync)
           .WithName("AddAirport")
           .WithSummary("Add a new airport")
           .WithDisplayName("AddAirport")
           .WithDescription("Add a new airport.")
           .WithTags("Airports");

        v1.MapPut("/airports/{name:minlength(1)}", UpdateAirportAsync)
           .WithName("UpdateAirport")
           .WithSummary("Updates an airport")
           .WithDisplayName("UpdateAirport")
           .WithDescription("Updates an airport.")
           .WithTags("Airports");

        v1.MapGet("airports/by/{id:Guid}/terminals", GetTerminalsByAirportIdAsync)
            .WithName("GetTerminals")
            .WithSummary("List airport terminals")
            .WithDescription("Get a paginated list of terminals in the airport.")
            .WithTags("Terminals");

        v1.MapGet("airports/by/{name:minlength(1)}/terminals", GetTerminalsByAirportNameAsync)
            .WithName("GetTerminalByName")
            .WithSummary("List airport terminals")
            .WithDescription("Get a paginated list of terminals in the airport.")
            .WithTags("Terminals");

        v1.MapGet("airports/terminals/by/{name:minlength(1)}/gates", GetGatesByTerminalNameAsync)
            .WithName("GetGates")
            .WithSummary("List gates terminal")
            .WithDescription("Get a paginated list of gates in the terminal.")
            .WithTags("Gates");

        return app;
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok<List<Entities.Airport>>> GetAirportsAsync()
    {
        await Task.CompletedTask;
        return TypedResults.Ok(new List<Entities.Airport>());
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Created> AddAirportAsync()
    {
        var airport = new Entities.Airport();
        await Task.CompletedTask;
        return TypedResults.Created($"/api/airports/{airport.Id}");
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Created> UpdateAirportAsync(string airportCode)
    {
        await Task.CompletedTask;
        return TypedResults.Created($"/api/airports/someid");
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok<List<Entities.Terminal>>> GetTerminalsByAirportIdAsync()
    {
        await Task.CompletedTask;
        return TypedResults.Ok(new List<Terminal>());
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok<List<Entities.Terminal>>> GetTerminalsByAirportNameAsync()
    {
        await Task.CompletedTask;
        return TypedResults.Ok(new List<Terminal>());
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task GetTerminalByNameAsync(HttpContext context)
    {
        await Task.CompletedTask;
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task GetGatesByTerminalIdAsync(HttpContext context)
    {
        await Task.CompletedTask;
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task GetGatesByTerminalNameAsync(HttpContext context)
    {
        await Task.CompletedTask;
    }

}
