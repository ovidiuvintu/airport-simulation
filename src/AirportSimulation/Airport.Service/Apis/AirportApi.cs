
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
           .WithDescription("Get a list of airports")
           .WithTags("Airports");

        v1.MapGet("/airports/byname/{name:minlength(1)}", GetAirportsByNameAsync)
           .WithName("GetAirportByName")
           .WithSummary("List airport details by airport name")
           .WithDisplayName("GetAirportByName")
           .WithDescription("Get airport details by airport name")
           .WithTags("Airports");

        v1.MapGet("/airports/bycode/{iatacode:minlength(3)}", GetAirportsByIataCodeAsync)
           .WithName("GetAirportByAirportIataCode")
           .WithSummary("List airport details by airport IATA code")
           .WithDisplayName("GetAirportByIataCode")
           .WithDescription("Get airport details by airport IATA code")
           .WithTags("Airports");

        v1.MapPost("/airports", AddAirportAsync)
           .WithName("AddAirport")
           .WithSummary("Add a new airport")
           .WithDisplayName("AddAirport")
           .WithDescription("Add a new airport")
           .WithTags("Airports");

        v1.MapPut("/airports/byname/{name:minlength(1)}", UpdateAirportAsync)
           .WithName("UpdateAirportByName")
           .WithSummary("Update airport by name")
           .WithDisplayName("UpdateAirport")
           .WithDescription("Update airport by name")
           .WithTags("Airports");

        v1.MapPut("/airports/bycode/{iatacode:minlength(1)}", UpdateAirportAsync)
           .WithName("UpdateAirportByIataCode")
           .WithSummary("Update airport by IATA code")
           .WithDisplayName("UpdateAirport")
           .WithDescription("Update airport by IATA code")
           .WithTags("Airports");

        v1.MapGet("airports/by/{id:Guid}/terminals", GetTerminalsByAirportIdAsync)
            .WithName("GetTerminals")
            .WithSummary("List airport terminals by airport code")
            .WithDescription("Get airport terminals by airport code")
            .WithTags("Terminals");

        v1.MapGet("airports/by/{name:minlength(1)}/terminals", GetTerminalsByAirportNameAsync)
            .WithName("GetTerminalByName")
            .WithSummary("List airport terminals by airport name")
            .WithDescription("Get airport terminals by airport name")
            .WithTags("Terminals");

        v1.MapGet("airports/terminals/by/{name:minlength(1)}/gates", GetGatesByTerminalNameAsync)
            .WithName("GetGates")
            .WithSummary("List gates terminal")
            .WithDescription("Get a paginated list of gates in the terminal.")
            .WithTags("Gates");

        return app;
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok<IEnumerable<Entities.Airport>>> GetAirportsAsync()
    {
        await Task.CompletedTask;
        return TypedResults.Ok<IEnumerable<Entities.Airport>>(new List<Entities.Airport>());
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok<Entities.Airport>> GetAirportsByIataCodeAsync()
    {
        await Task.CompletedTask;
        return TypedResults.Ok(new Entities.Airport());
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok<Entities.Airport>> GetAirportsByNameAsync()
    {
        await Task.CompletedTask;
        return TypedResults.Ok(new Entities.Airport());
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Created> AddAirportAsync()
    {
        var airport = new Entities.Airport();
        await Task.CompletedTask;
        return TypedResults.Created($"/api/airports/{airport.Id}");
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok> UpdateAirportAsync(string airportCode)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
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
    private static async Task GetGatesByTerminalNameAsync(HttpContext context)
    {
        await Task.CompletedTask;
    }

}
