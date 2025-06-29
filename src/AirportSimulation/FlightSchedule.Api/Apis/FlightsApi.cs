using FlightSchedule.Api.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace FlightSchedule.Api;

public static class FlightsApi
{
    public static IEndpointRouteBuilder MapFlightsApi(this IEndpointRouteBuilder app)
    {
        var vApi = app.NewVersionedApi("Schedule");
        var v1 = vApi.MapGroup("api/schedule").HasApiVersion(1, 0);

        v1.MapGet("/flights", GetAllFlights)
            .WithName("ListFlights")
            .WithSummary("List all flights.")
            .WithDescription("Get a paginated list of all flights.")
            .WithTags("Flights");

        v1.MapGet("/flights/bynumber/{number:minlength(1)}", GetFlightByFlightNumber)
            .WithName("ListFlightDetailsByFlightNumber")
            .WithSummary("List flight details by flight number.")
            .WithDescription("Get flight details.")
            .WithTags("Flights");

        v1.MapGet("/flights/bydeparture/{city:minlength(1)}", GetFlightsByDepartureCity)
            .WithName("ListFlightsByDepartureCity")
            .WithSummary("List flights details by departure city.")
            .WithDescription("Get flights details by departure city.")
            .WithTags("Flights");

        v1.MapGet("/flights/bytimespan/{start:DateTime}/{end:DateTime}", GetFlightsByTimespan)
            .WithName("ListFlightsByTimeSpan")
            .WithSummary("List flights details by time span.")
            .WithDescription("Get flights details by time span.")
            .WithTags("Flights");

        return app;
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<IEnumerable<Flight>>> GetAllFlights()
    {
        await Task.CompletedTask;
        IEnumerable<Flight> flights = [];
        return TypedResults.Ok(flights);
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<Flight>> GetFlightByFlightNumber(string flightNumber)
    {
        await Task.CompletedTask;
        var flight = new Flight();
        return TypedResults.Ok(flight);
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<IEnumerable<Flight>>> GetFlightsByDepartureCity(string city)
    {
        await Task.CompletedTask;
        IEnumerable<Flight> flights = [];
        return TypedResults.Ok(flights);
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<IEnumerable<Flight>>> GetFlightsByTimespan(DateTime start, DateTime end)
    {
        await Task.CompletedTask;
        IEnumerable<Flight> flights = [];
        return TypedResults.Ok(flights);
    }
}
