using AirportManagement.Service.Commands;
using AirportManagement.Service.Queries;
using AirportManagement.Service.Repository.Entities;
using Infrastructure.DTOs;
using MediatR;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace AirportManagement.Service.Apis;

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

        v1.MapPut("/airports/{airportId:guid}", UpdateAirportAsync)
           .WithName("UpdateAirportById")
           .WithSummary("Update airport details")
           .WithDisplayName("UpdateAirport")
           .WithDescription("Update airport details")
           .WithTags("Airports");

        v1.MapDelete("/airports/{airportId:guid}", DeleteAirportAsync)
              .WithName("DeleteAirportById")
           .WithSummary("Delete airport")
           .WithDisplayName("DeleteAirport")
           .WithDescription("Delete airport")
           .WithTags("Airports");

        v1.MapGet("/airports/{airportId:guid}/terminals", GetAirportTerminalsAsync)
            .WithName("GetTerminals")
            .WithSummary("List airport terminals")
            .WithDescription("Get airport terminals")
            .WithTags("Terminals");

        v1.MapPost("/airports/{airportId:guid}/terminals", AddAirportTerminalAsync)
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
    private static async Task<IResult> GetAirportsAsync(IMediator mediator)
    {
        GetAllAirportsQuery query = new GetAllAirportsQuery();
        var response = await mediator.Send(query);
        return response != null && response.Success ? TypedResults.Ok(response.Data.Select(s => s.AsAirportDto()))
                                                    : TypedResults.BadRequest($"{response.Error}");
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status404NotFound, "application/problem+json")]
    private static async Task<IResult> GetAirportByIataCodeAsync([FromRoute] string iatacode, IMediator mediator)
    {
        GetAirportByCodeQuery getAirportByIataCode = new GetAirportByCodeQuery
        {
             Code = iatacode,
        }; 

        var response = await mediator.Send(getAirportByIataCode);
        if (response is not null)
        {
            return response.Success ? TypedResults.Ok(response.Data) 
                                    : TypedResults.NotFound(response.Error);
        }

        return TypedResults.BadRequest($"An error occurred while retrieving airport {iatacode} information");
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status404NotFound, "application/problem+json")]
    private static async Task<IResult> GetAirportByNameAsync([FromRoute] string name, IMediator mediator)
    {
        GetAirportByNameQuery getAirportByNameCode = new GetAirportByNameQuery
        {
            Name = name,
        };

        var response = await mediator.Send(getAirportByNameCode);
        if (response is not null)
        {
            return response.Success ? TypedResults.Ok(response.Data)
                                    : TypedResults.NotFound(response.Error);
        }

        return TypedResults.BadRequest($"An error occurred while retrieving airport {name} information");
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    private static async Task<IResult> AddAirportAsync([FromBody] CreateAirportDto airport,
        IMediator mediator)
    {
        // Build the airport entity. BaseEntity ctor will create a new Id which we can use
        var airportEntity = new AirportManagement.Service.Repository.Entities.Airport
        {
            AirportCode = airport.AirportCode,
            Description = airport.Description,
            Name = airport.Name,
            Terminals = airport.Terminals?.Select(t => new AirportManagement.Service.Repository.Entities.Terminal
            {
                Name = t.Name,
                // ignore any AirportId sent by the client and assign the newly created airport id
                AirportId = Guid.Empty,
            }).ToList() ?? new List<AirportManagement.Service.Repository.Entities.Terminal>()
        };

        // Ensure each terminal references the airport's generated Id
        if (airportEntity.Terminals is not null)
        {
            foreach (var term in airportEntity.Terminals)
            {
                term.AirportId = airportEntity.Id;
                term.Airport = airportEntity;
            }
        }

        CreateAirportCommand createAirportCommand = new()
        {
            Airport = airportEntity
        };
        var response = await mediator.Send(createAirportCommand);
        return response is not null && response.Success ? TypedResults.Created($"/api/airports/{response.Data.Id}")
                                                        : TypedResults.BadRequest($"{response.Error}");
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status404NotFound, "application/problem+json")]
        private static async Task<IResult> UpdateAirportAsync([FromRoute] Guid airportId, [FromBody] UpdateAirportDto airport, IMediator mediator)
    {
          UpdateAirportCommand updateAirportCommand = new()
          {
              AirportId = airportId,
              Airport = new Repository.Entities.Airport
              {
                 AirportCode = airport.AirportCode,
                 Name = airport.Name,
                 Description = airport.Description,
              }
          };

        var response = await mediator.Send(updateAirportCommand);
        return TypedResults.Ok();
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<IResult> DeleteAirportAsync([FromRoute] Guid airportId)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok<List<AirportManagement.Service.Repository.Entities.Terminal>>> GetAirportTerminalsAsync([FromRoute] Guid airportId)
    {
        await Task.CompletedTask;
        return TypedResults.Ok(new List<AirportManagement.Service.Repository.Entities.Terminal>());
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Created> AddAirportTerminalAsync([FromRoute] Guid airportId, [FromBody] AirportManagement.Service.Repository.Entities.Terminal terminal)
    {
        await Task.CompletedTask;
        return TypedResults.Created($"/api/airports/{airportId}/terminals/{terminal.Id}");
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok> UpdateAirportTerminalAsync([FromRoute] Guid airportId, [FromRoute] Guid terminalId)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok> DeleteAirportTerminalAsync([FromRoute] Guid airportId, [FromRoute] Guid terminalId)
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
