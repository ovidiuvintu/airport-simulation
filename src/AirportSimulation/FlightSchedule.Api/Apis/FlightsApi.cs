
using FlightSchedule.Api.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace FlightSchedule.Api.Apis;

public static class FlightsApi
{
    public static IEndpointRouteBuilder MapFlightsApi(this IEndpointRouteBuilder app)
    {
        var vApi = app.NewVersionedApi("Schedule");
        var v1 = vApi.MapGroup("api/schedule").HasApiVersion(1, 0);

        v1.MapGet("/flights", GetAllFlights)
            .WithName("ListFlights")
            .WithSummary("List all flights")
            .WithDescription("Get a paginated list of flights landing or departing.")
            .WithTags("Flights");

        v1.MapGet("/flights/by/{number:minlength(1)}", GetFlightByNumber)
            .WithName("GetFlightByNumber")
            .WithSummary("Get flight number")
            .WithDescription("Get a flight from current flights")
            .WithTags("Flights");

        return app;
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<IEnumerable<Flight>>> GetAllFlights()
    {
        await Task.CompletedTask;
        IEnumerable<Flight> flights = new List<Flight>();
        return TypedResults.Ok(flights);
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<Flight>> GetFlightByNumber(string flightNumber)
    {
        await Task.CompletedTask;
        var flight = new Flight();
        return TypedResults.Ok(flight);
    }
}
