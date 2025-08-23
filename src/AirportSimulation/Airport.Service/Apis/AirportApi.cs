
using Airport.Service.Commands.Airport.CreateAirport;
using Airport.Service.Repository.Entities;
using MediatR;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Airport.Service.Apis;

public static class AirportApi
{
    public static IEndpointRouteBuilder MapAirportApi(this IEndpointRouteBuilder app)
    {
        var vApi = app.NewVersionedApi("AirportSpecification");
        var api = vApi.MapGroup("api/airportspecification").HasApiVersion(1, 0);
        var v1 = vApi.MapGroup("api/airportspecification").HasApiVersion(1, 0);

        v1.MapGet("/airports", GetAirportsAsync)
           .WithName("GetAirports")
           .WithSummary("List airports")
           .WithDisplayName("GetAllAirports")
           .WithDescription("Get a list of airports")
           .WithTags("Airports");

        v1.MapGet("/airports/byname/{name:minlength(1)}", GetAirportByNameAsync)
           .WithName("GetAirportByName")
           .WithSummary("List airport details by airport name")
           .WithDisplayName("GetAirportByName")
           .WithDescription("Get airport details by airport name")
           .WithTags("Airports");

        v1.MapGet("/airports/bycode/{iatacode:length(3)}", GetAirportByIataCodeAsync)
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

        v1.MapPut("/airports/{airportId:Guid}", UpdateAirportAsync)
           .WithName("UpdateAirportByName")
           .WithSummary("Update airport details")
           .WithDisplayName("UpdateAirport")
           .WithDescription("Update airport details")
           .WithTags("Airports");

        v1.MapDelete("/airports/{airportId:Guid}", DeleteAirportAsync)
           .WithName("DeleteAirportByName")
           .WithSummary("Delete airport")
           .WithDisplayName("DeleteAirport")
           .WithDescription("Delete airport")
           .WithTags("Airports");

        v1.MapGet("airports/{airportId:guid}/terminals", GetAirportTerminalsAsync)
            .WithName("GetTerminals")
            .WithSummary("List airport terminals")
            .WithDescription("Get airport terminals")
            .WithTags("Terminals");

        v1.MapPost("airports/{airportId:guid}/terminals", AddAirportTerminalAsync)
           .WithName("AddTerminal")
           .WithSummary("Add a new terminal")
           .WithDisplayName("AddTerminal")
           .WithDescription("Add a new terminal")
           .WithTags("Terminals");

        v1.MapPut("/airports/{airportId:guid}/terminals/{terminalId:guid}", UpdateAirportTerminalAsync)
           .WithName("UpdateTerminal")
           .WithSummary("Update terminal")
           .WithDisplayName("UpdateTerminal")
           .WithDescription("Update terminal")
           .WithTags("Terminals");

        v1.MapDelete("/airports/{airportId:guid}/terminals/{terminalId:guid}", DeleteAirportTerminalAsync)
           .WithName("DeleteTerminal")
           .WithSummary("Delete terminal")
           .WithDisplayName("DeleteTerminal")
           .WithDescription("Delete terminal")
           .WithTags("Terminals");

        return app;
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok<IEnumerable<Repository.Entities.Airport>>> GetAirportsAsync()
    {
        await Task.CompletedTask;
        return TypedResults.Ok<IEnumerable<Repository.Entities.Airport>>([]);
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok<Repository.Entities.Airport>> GetAirportByIataCodeAsync([FromRoute] string iatacode)
    {
        await Task.CompletedTask;
        return TypedResults.Ok(new Repository.Entities.Airport());
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok<Repository.Entities.Airport>> GetAirportByNameAsync([FromRoute] string name)
    {
        await Task.CompletedTask;
        return TypedResults.Ok(new Repository.Entities.Airport());
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(DTOs.AirportDto))]
    private static async Task<IResult> AddAirportAsync([FromBody] DTOs.AirportDto airport,
        IMediator mediator)
    {
        CreateAirportCommand createAirportCommand = new CreateAirportCommand();
        createAirportCommand.AirportCode = airport.AirportCode;
        createAirportCommand.Description = airport.Description;
        createAirportCommand.Name = airport.Name;

        var response = await mediator.Send(createAirportCommand);
        if (response != null && response.Success)
        {
            if (response.Success)
                return TypedResults.Created($"/api/airports/{airport.Id}");
            else
                return TypedResults.BadRequest($"{response.Error}");
        }

        return TypedResults.BadRequest($"Unexpected error ocurred");
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok> UpdateAirportAsync([FromRoute] Guid airportId)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok> DeleteAirportAsync([FromRoute] Guid airportId)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok<List<Repository.Entities.Terminal>>> GetAirportTerminalsAsync([FromRoute] string airportId)
    {
        await Task.CompletedTask;
        return TypedResults.Ok(new List<Terminal>());
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Created> AddAirportTerminalAsync([FromRoute] Guid airportId, [FromBody] Terminal terminal)
    {
        await Task.CompletedTask;
        return TypedResults.Created($"/api/airports/{airportId}/terminals/{terminal.Id}");
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok> UpdateAirportTerminalAsync([FromRoute] string airportId, [FromRoute] Guid terminalId)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok> DeleteAirportTerminalAsync([FromRoute] string airportId, [FromRoute] Guid terminalId)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task GetGatesByTerminalNameAsync()
    {
        await Task.CompletedTask;
    }

}
