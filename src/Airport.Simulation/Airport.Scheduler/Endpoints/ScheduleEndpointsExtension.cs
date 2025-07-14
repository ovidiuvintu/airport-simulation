
using Airport.Scheduler.Data;
using Airport.Scheduler.Moldel;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinimalApis.Extensions.Filters;

namespace Airport.Endpoints;

public static class ScheduleEndpointsExtension
{
    public static IEndpointRouteBuilder MapScheduleEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/flights/{airportcode:alpha}", 
            async (Guid requestId, string airportcode, IScheduleServices scheduleServices, CancellationToken cancellationToken) =>
                await GetFlightsAsync(requestId, airportcode, scheduleServices, cancellationToken));

        app.MapGet("/flights/{airportcode:alpha}/departing", 
            async (Guid requestId, string airportcode, IScheduleServices scheduleServices, CancellationToken cancellationToken) =>
                await GetDepartingFlightsAsync(requestId, airportcode, scheduleServices, cancellationToken));

        app.MapGet("/flights/{airportcode:alpha}/departing/bydestination/{destination:alpha}", 
            async (Guid requestId, string airportcode, string destination, IScheduleServices scheduleServices, CancellationToken cancellationToken) =>
               await GetDepartingFlightsByDestinationAsync(requestId, airportcode, destination, scheduleServices, cancellationToken));

        app.MapGet("/flights/{airportcode:alpha}/departing/bytimeframe/starttime/{start:DateTime}/endtime/{end:datetime}", 
            async (Guid requestId, string airportcode, DateTime start, DateTime end, IScheduleServices scheduleServices, CancellationToken cancellationToken) =>
                await GetDepartingFlightsByTimeFrameAsync(requestId, airportcode, start, end, scheduleServices, cancellationToken));

        app.MapGet("/flights/{airportcode:alpha}/departing/bygate/{gatenumber:alpha}", 
            async (Guid requestId, string airportcode, string gatenumber, IScheduleServices scheduleServices, CancellationToken cancellationToken) =>
                await GetDepartingFlightsByGateAsync(requestId, airportcode, gatenumber, scheduleServices, cancellationToken));

        app.MapGet("/flights/{airportcode:alpha}/departing/byflight/{flightnumber:alpha}", 
            async (Guid requestId, string airportcode, string flightnumber, IScheduleServices scheduleServices, CancellationToken cancellationToken) =>
                await GetDepartingFlightsByFlightNumberAsync(requestId, airportcode, flightnumber, scheduleServices, cancellationToken));

        app.MapGet("/flights/{airportcode:alpha}/departing/byairline/{airlinename:alpha}", 
            async (Guid requestId, string airportcode, string airlinename, IScheduleServices scheduleServices, CancellationToken cancellationToken) => 
                await GetDepartingFlightsByAirlineAsync(requestId, airportcode, airlinename, scheduleServices, cancellationToken));

        app.MapGet("/flights/{airportcode:alpha}/arriving", 
            async (Guid requestId, string airportcode, IScheduleServices scheduleServices, CancellationToken cancellationToken) =>
                await GetArrivingFlightsAsync(requestId, airportcode, scheduleServices, cancellationToken));

        app.MapGet("/flights/{airportcode:alpha}/arriving/byorigin/{origin:alpha}", 
            async (Guid requestId, string airportcode, string origin, IScheduleServices scheduleServices, CancellationToken cancellationToken) =>
                await GetArrivingFlightsyOriginAsync(requestId, airportcode, origin, scheduleServices, cancellationToken));

        app.MapGet("/flights/{airportcode:alpha}/arriving/bytimeframe/starttime/{start:DateTime}/endtime/{end:datetime}", 
             async (Guid requestId, string airportcode, DateTime start, DateTime end, IScheduleServices scheduleServices, CancellationToken cancellationToken) =>
                await GetArrivingFlightsByTimeFrameAsync(requestId, airportcode, start, end, scheduleServices, cancellationToken));

        app.MapGet("/flights/{airportcode:alpha}/arriving/bygate/{gatenumber:alpha}", 
            async (Guid requestId, string airportcode, string gatenumber, IScheduleServices scheduleServices, CancellationToken cancellationToken) => 
                await GetArrivingFlightsByGateAsync(requestId, airportcode, gatenumber, scheduleServices, cancellationToken));

        app.MapGet("/flights/{airportcode:alpha}/arriving/byflightnumber/{flightnumber:alpha}", 
            async (Guid requestId, string airportcode, string flightnumber, IScheduleServices scheduleServices, CancellationToken cancellationToken) =>
                await GetArrivingFlightsByFlightNumberAsync(requestId, airportcode, flightnumber, scheduleServices, cancellationToken));

        app.MapGet("/flights/{airportcode:alpha}/arriving/byairline/{airlinname:alpha}", 
            async (Guid requestId, string airportcode, string airlinename, IScheduleServices scheduleServices, CancellationToken cancellationToken) =>
                await GetArrivingFlightsByAirlineAsync(requestId, airportcode, airlinename, scheduleServices, cancellationToken));

        app.MapPost("/flights/{airport:alpha}/departing",
            async (Guid requestId, AddDepartingFlightRequest departingflightrequest, IScheduleServices scheduleservices, CancellationToken cancellationToken) =>
                await AddDepartingFlightAsync(requestId, departingflightrequest, scheduleservices, cancellationToken));

        app.MapPost("/flights/{airportcode:alpha}/arriving",
            async (Guid requestId, AddArrivingFlightRequest arrivingFlightRequest, IScheduleServices scheduleservices, CancellationToken cancellationToken) =>
                await AddArrivingFlightAsync(requestId, arrivingFlightRequest, scheduleservices, cancellationToken));

        app.MapPut("/flights/{airportcode:alpha}/{flightnumber:alpha}",
            async (Guid requestId, UpdateFlightRequest updateflightrequest, IScheduleServices scheduleservices, CancellationToken cancellationToken) =>
                await UpdateFlightAsync(requestId, updateflightrequest, scheduleservices, cancellationToken));

        app.MapDelete("/flights/{airportcode:alpha}/{flightnumber:alpha}",
            async (Guid requestId, string airportcode, string flightnumber, IScheduleServices scheduleservices, CancellationToken cancellationToken) =>
                await DeleteFlightAsync(requestId, airportcode, flightnumber, scheduleservices, cancellationToken));

        return app;
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetFlightsAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId,
        [Validate] string airportcode,
        IScheduleServices scheduleServices,
        CancellationToken cancellationToken)
    {
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok<List<DepartingFlight>>, BadRequest<string>, ValidationProblem>> GetDepartingFlightsAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId,
        [Validate] string airportcode,
        IScheduleServices scheduleServices,
        CancellationToken cancellationToken)
    {
        var departingFlights = await scheduleServices.DbContext.DepartingFlights.ToListAsync(cancellationToken);
        return TypedResults.Ok(departingFlights);
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByDestinationAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId, 
        [Validate] string airportcode, 
        [Validate] string destination, 
        IScheduleServices scheduleServices,
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByTimeFrameAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId, 
        [Validate] string airportcode, 
        DateTime start, 
        DateTime end, 
        IScheduleServices scheduleServices,
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByGateAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId, 
        [Validate] string airportcode, 
        [Validate] string gatenumber, 
        IScheduleServices scheduleServices,
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByFlightNumberAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId, 
        [Validate] string airportcode, 
        [Validate] string flightnumber, 
        IScheduleServices scheduleServices,
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByAirlineAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId, 
        [Validate] string airportcode, 
        [Validate] string airlinename, 
        IScheduleServices scheduleServices,
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId, 
        [Validate] string airportcode, 
        IScheduleServices scheduleServices,
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsyOriginAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId, 
        [Validate] string airportcode, 
        [Validate] string origin, 
        IScheduleServices scheduleServices,
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByTimeFrameAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId, 
        [Validate] string airportcode, 
        DateTime start, 
        DateTime end, 
        IScheduleServices scheduleServices,
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByGateAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId, 
        [Validate] string airportcode, 
        [Validate] string gatenumber, 
        IScheduleServices scheduleServices,
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByFlightNumberAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId, 
        [Validate] string airportcode, 
        [Validate] string flightnumber, 
        IScheduleServices scheduleServices,
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByAirlineAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId,
        [Validate] string airportcode,
        [Validate] string airlinename,
        [AsParameters] IScheduleServices scheduleServices,
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    public static async Task<Results<Created, BadRequest<string>, Conflict<string>, ValidationProblem>> AddDepartingFlightAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId,                                                                                                       
        [Validate] AddDepartingFlightRequest request,                                                                                                       
        [AsParameters] IScheduleServices services,
        CancellationToken cancellationToken)
    {
        if (requestId == Guid.Empty)
            return TypedResults.BadRequest("RequestId is missing.");

        var departingflight = new DepartingFlight
        {
            Carrier = new Carrier
            {
                CarrierCode = request.CarrierCode,
                Name = request.CarrierName,
                Description = request.CarrierDescription,
            },
            Destination = new Scheduler.Data.Airport
            {
                AirportCode = request?.DestinationAirportCode,
                Name = request?.DestinationAirportName,
                Description = request?.DestinationAirportDescription,
            },
            Origin = new Scheduler.Data.Airport
            {
                AirportCode = request?.OriginAirportCode,
                Name = request?.OriginAirportName,
                Description = request?.OriginAirportDescription,
            },
            FlightNumber = request?.FlightNumber,
            ScheduledDepartureTime = request != null ? request.ScheduledDepartureTime : DateTime.MinValue,
        };

        await services.DbContext.DepartingFlights.AddAsync(departingflight);
        await services.DbContext.SaveChangesAsync();
        return TypedResults.Created();
    }

    public static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> AddArrivingFlightAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId,
        [Validate] AddArrivingFlightRequest request,
        [AsParameters] IScheduleServices services,
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> UpdateFlightAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId,
        [Validate] UpdateFlightRequest request,
        [AsParameters] IScheduleServices services,
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> DeleteFlightAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId,
        [Validate] string airportcode,
        [Validate] string flightnumber,
        [AsParameters] IScheduleServices services,
        CancellationToken cancellationToken)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }
}
