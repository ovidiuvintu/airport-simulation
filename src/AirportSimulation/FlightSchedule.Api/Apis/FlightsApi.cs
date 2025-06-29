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
            .WithDescription("Get a list of all arriving flights.")
            .WithTags("Flights");

        v1.MapGet("/arrivingflights/bynumber/{number:minlength(1)}", GetArrivingFlightByFlightNumber)
            .WithName("ListArrivingFlightDetailsByFlightNumber")
            .WithSummary("List arriving flight details by flight number.")
            .WithDescription("Get arriving flight details.")
            .WithTags("Flights");

        v1.MapGet("/arrivingflights/byorigin/{city:minlength(1)}", GetArrivingFlightsByOrigin)
            .WithName("ListArrivingFlightsByOrigin")
            .WithSummary("List flights details by departure city.")
            .WithDescription("Get a list of flights details by departure city.")
            .WithTags("Flights");

        v1.MapGet("/arrivingflights/bytimespan/{start:DateTime}/{end:DateTime}", GetArrivingFlightsByTimespan)
            .WithName("ListArrivingFlightsByTimeSpan")
            .WithSummary("List arriving flights details over a time range.")
            .WithDescription("Get a list of arriving flights details over a time range.")
            .WithTags("Flights");

        v1.MapGet("/departingflights", GetAllDepartingFlights)
            .WithName("ListDepartingFlights")
            .WithSummary("List all departing flights.")
            .WithDescription("Get a list of all departing flights.")
            .WithTags("Flights");

        v1.MapGet("/departingflights/bynumber/{number:minlength(1)}", GetDepartingFlightByFlightNumber)
            .WithName("ListDepartingFlightDetailsByFlightNumber")
            .WithSummary("List departing flight details by flight number.")
            .WithDescription("Get departing flight details.")
            .WithTags("Flights");

        v1.MapGet("/departingflights/bydestination/{city:minlength(1)}", GetDepartingFlightsByDestination)
            .WithName("ListDepartingFlightsByDestination")
            .WithSummary("List flights details by arrival city.")
            .WithDescription("Get a list of flights details by arrival city.")
            .WithTags("Flights");

        v1.MapGet("/departingflights/bytimespan/{start:DateTime}/{end:DateTime}", GetDepartingFlightsByTimespan)
            .WithName("ListDepartingFlightsByTimeSpan")
            .WithSummary("List departing flights details over a time range.")
            .WithDescription("Get a list of departing flights details over a time range.")
            .WithTags("Flights");

        return app;
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status401Unauthorized, "application/problem+json")]
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

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status401Unauthorized, "application/problem+json")]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<DepartingFlight>> GetDepartingFlightByFlightNumber([FromQuery]string flightNumber, [AsParameters] FlightServices services)
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

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status401Unauthorized, "application/problem+json")]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<IEnumerable<DepartingFlight>>> GetDepartingFlightsByDestination([FromQuery] string city, [AsParameters] FlightServices services)
    {
        try
        {
            var departingflights = await services.DepartingFlightsQueries.GetDepartingFlightsAsync();
            return TypedResults.Ok(departingflights.Where(departingFlight => departingFlight.To == city));
        }
        catch (Exception)
        {
            throw;
        }
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status401Unauthorized, "application/problem+json")]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<IEnumerable<DepartingFlight>>> GetDepartingFlightsByTimespan([FromQuery] DateTime start, [FromQuery] DateTime end, [AsParameters] FlightServices services)
    {
        try
        {
            var departingflights = await services.DepartingFlightsQueries.GetDepartingFlightsAsync();
            return TypedResults.Ok(departingflights.Where(departingFlight => departingFlight.Time >= start && departingFlight.Time <= end));
        }
        catch (Exception)
        {
            throw;
        }
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status401Unauthorized, "application/problem+json")]
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

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status401Unauthorized, "application/problem+json")]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<ArrivingFlight>> GetArrivingFlightByFlightNumber([FromQuery] string flightNumber, [AsParameters] FlightServices services)
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

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status401Unauthorized, "application/problem+json")]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<IEnumerable<ArrivingFlight>>> GetArrivingFlightsByOrigin([FromQuery] string city, [AsParameters] FlightServices services)
    {
        try
        {
            var arrivingFlights = await services.ArrivingFlightsQueries.GetArrivingFlightsAsync();
            return TypedResults.Ok(arrivingFlights.Where(arrivingFlight => arrivingFlight.From == city));
        }
        catch
        {
            throw;
        }
    }

    [ProducesResponseType<ProblemDetails>(StatusCodes.Status401Unauthorized, "application/problem+json")]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest, "application/problem+json")]
    public static async Task<Ok<IEnumerable<ArrivingFlight>>> GetArrivingFlightsByTimespan([FromQuery] DateTime start, [FromQuery] DateTime end, [AsParameters] FlightServices services)
    {
        try
        {
            var arrivingflights = await services.ArrivingFlightsQueries.GetArrivingFlightsAsync();
            return TypedResults.Ok(arrivingflights.Where(arrivingFlight => arrivingFlight.Time >= start && arrivingFlight.Time <= end));
        }
        catch (Exception)
        {
            throw;
        }
    }
}
