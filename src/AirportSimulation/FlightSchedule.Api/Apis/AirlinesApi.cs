
using FlightSchedule.Api.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace FlightSchedule.Api;

public static class AirlinesApi
{
    public static IEndpointRouteBuilder MapAirlinesApi(this IEndpointRouteBuilder app)
    {
        var vApi = app.NewVersionedApi("Operator");
        var v1 = vApi.MapGroup("api/operator").HasApiVersion(1, 0);
        v1.MapGet("/airlines", GetAllAirlines)
            .WithName("ListAirlines")
            .WithSummary("List all airlines.")
            .WithDescription("Get a paginated list of operating airlines.")
            .WithTags("Airlines")
            .WithOpenApi();
        return app;
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<IEnumerable<Airline>>> GetAllAirlines()
    {
        await Task.CompletedTask;
        IEnumerable<Airline> airlines = [];
        return TypedResults.Ok(airlines);
    }
}