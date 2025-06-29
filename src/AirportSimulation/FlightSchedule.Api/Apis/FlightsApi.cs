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

        v1.MapGet("/arrivingflights", GetAllArrivingFlights)
            .WithName("ListArrivingFlights")
            .WithSummary("List all arriving flights.")
            .WithDescription("Get a paginated list of all arriving flights.")
            .WithTags("Flights");

        v1.MapGet("/arrivingflights/bynumber/{number:minlength(1)}", GetArrivingFlightByFlightNumber)
            .WithName("ListArrivingFlightDetailsByFlightNumber")
            .WithSummary("List arriving flight details by flight number.")
            .WithDescription("Get arriving flight details.")
            .WithTags("Flights");

        v1.MapGet("/arrivingflights/bydeparture/{city:minlength(1)}", GetArrivingFlightsByDepartureCity)
            .WithName("ListArrivingFlightsByDepartureCity")
            .WithSummary("List flights details by departure city.")
            .WithDescription("Get flights details by departure city.")
            .WithTags("Flights");

        v1.MapGet("/arrivingflights/bytimespan/{start:DateTime}/{end:DateTime}", GetArrivingFlightsByTimespan)
            .WithName("ListArrivingFlightsByTimeSpan")
            .WithSummary("List arriving flights details by time span.")
            .WithDescription("Get arriving flights details by time span.")
            .WithTags("Flights");

        v1.MapGet("/departingflights", GetAllDepartingFlights)
            .WithName("ListDepartingFlights")
            .WithSummary("List all departing flights.")
            .WithDescription("Get a paginated list of all departing flights.")
            .WithTags("Flights");

        v1.MapGet("/departingflights/bynumber/{number:minlength(1)}", GetDepartingFlightByFlightNumber)
            .WithName("ListDepartingFlightDetailsByFlightNumber")
            .WithSummary("List departing flight details by flight number.")
            .WithDescription("Get departing flight details.")
            .WithTags("Flights");

        v1.MapGet("/departingflights/byarrival/{city:minlength(1)}", GetDepartingFlightsByArrivalCity)
            .WithName("ListDepartingFlightsByArrivalCity")
            .WithSummary("List flights details by arrival city.")
            .WithDescription("Get flights details by arrival city.")
            .WithTags("Flights");

        v1.MapGet("/departingflights/bytimespan/{start:DateTime}/{end:DateTime}", GetDepartingFlightsByTimespan)
            .WithName("ListDepartingFlightsByTimeSpan")
            .WithSummary("List departing flights details by time span.")
            .WithDescription("Get departing flights details by time span.")
            .WithTags("Flights");

        return app;
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok<IEnumerable<DepartingFlight>>> GetAllDepartingFlights([AsParameters] FlightServices services)
    {
        try
        {
            var departingflights = await services.DepartingFlightsQueries.GetDepartingFlightsAsync();
            return TypedResults.Ok(departingflights);
        }
        catch
        {
            throw;
        }
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<DepartingFlight>> GetDepartingFlightByFlightNumber(string flightNumber, [AsParameters] FlightServices services)
    {
        try
        {
            var departingflights = await services.DepartingFlightsQueries.GetDepartingFlightsAsync();
            return TypedResults.Ok(departingflights.FirstOrDefault(departingFlight=>departingFlight.Flight == flightNumber));
        }
        catch
        {
            throw;
        }
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<IEnumerable<DepartingFlight>>> GetDepartingFlightsByArrivalCity(string city)
    {
        await Task.CompletedTask;
        IEnumerable<DepartingFlight> flights = [];
        return TypedResults.Ok(flights);
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<IEnumerable<DepartingFlight>>> GetDepartingFlightsByTimespan(DateTime start, DateTime end)
    {
        await Task.CompletedTask;
        IEnumerable<DepartingFlight> flights = [];
        return TypedResults.Ok(flights);
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    private static async Task<Ok<IEnumerable<ArrivingFlight>>> GetAllArrivingFlights([AsParameters] FlightServices services)
    {
        try
        {
            var arrivingFlights = await services.ArrivingFlightsQueries.GetArrivingFlightsAsync();
            return TypedResults.Ok(arrivingFlights);
        }
        catch
        {
            throw;
        }
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<ArrivingFlight>> GetArrivingFlightByFlightNumber(string flightNumber, [AsParameters] FlightServices services)
    {
        try
        {
            var arrivingFlights = await services.ArrivingFlightsQueries.GetArrivingFlightsAsync();
            return TypedResults.Ok(arrivingFlights.FirstOrDefault(arrivingFlight => arrivingFlight.Flight == flightNumber));
        }
        catch
        {
            throw;
        }
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<IEnumerable<ArrivingFlight>>> GetArrivingFlightsByDepartureCity(string city)
    {
        await Task.CompletedTask;
        IEnumerable<ArrivingFlight> flights = [];
        return TypedResults.Ok(flights);
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<IEnumerable<ArrivingFlight>>> GetArrivingFlightsByTimespan(DateTime start, DateTime end)
    {
        await Task.CompletedTask;
        IEnumerable<ArrivingFlight> flights = [];
        return TypedResults.Ok(flights);
    }
}
