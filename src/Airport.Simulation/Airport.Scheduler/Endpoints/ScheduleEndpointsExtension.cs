using Airport.Scheduler.Moldel;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using MinimalApis.Extensions.Filters;

namespace Airport.Scheduler.Apis;

public static class ScheduleEndpointsExtension
{
    public static IEndpointRouteBuilder MapScheduleEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/flights/{airportcode:alpha}", 
            async (Guid requestId, string airportcode, IScheduleServices scheduleServices) =>
                await GetFlightsAsync(requestId, airportcode, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/departing", 
            async (Guid requestId, string airportcode, IScheduleServices scheduleServices) =>
                await GetDepartingFlightsAsync(requestId, airportcode, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/departing/bydestination/{destination:alpha}", 
            async (Guid requestId, string airportcode, string destination, IScheduleServices scheduleServices) =>
               await GetDepartingFlightsByDestinationAsync(requestId, airportcode, destination, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/departing/bytimeframe/starttime/{start:DateTime}/endtime/{end:datetime}", 
            async (Guid requestId, string airportcode, DateTime start, DateTime end, IScheduleServices scheduleServices) =>
                await GetDepartingFlightsByTimeFrameAsync(requestId, airportcode, start, end, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/departing/bygate/{gatenumber:alpha}", 
            async (Guid requestId, string airportcode, string gatenumber, IScheduleServices scheduleServices) =>
                await GetDepartingFlightsByGateAsync(requestId, airportcode, gatenumber, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/departing/byflight/{flightnumber:alpha}", 
            async (Guid requestId, string airportcode, string flightnumber, IScheduleServices scheduleServices) =>
                await GetDepartingFlightsByFlightNumberAsync(requestId, airportcode, flightnumber, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/departing/byairline/{airlinename:alpha}", 
            async (Guid requestId, string airportcode, string airlinename, IScheduleServices scheduleServices) => 
                await GetDepartingFlightsByAirlineAsync(requestId, airportcode, airlinename, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/arriving", 
            async (Guid requestId, string airportcode, IScheduleServices scheduleServices) =>
                await GetArrivingFlightsAsync(requestId, airportcode, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/arriving/byorigin/{origin:alpha}", 
            async (Guid requestId, string airportcode, string origin, IScheduleServices scheduleServices) =>
                await GetArrivingFlightsyOriginAsync(requestId, airportcode, origin, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/arriving/bytimeframe/starttime/{start:DateTime}/endtime/{end:datetime}", 
             async (Guid requestId, string airportcode, DateTime start, DateTime end, IScheduleServices scheduleServices) =>
                await GetArrivingFlightsByTimeFrameAsync(requestId, airportcode, start, end, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/arriving/bygate/{gatenumber:alpha}", 
            async (Guid requestId, string airportcode, string gatenumber, IScheduleServices scheduleServices) => 
                await GetArrivingFlightsByGateAsync(requestId, airportcode, gatenumber, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/arriving/byflightnumber/{flightnumber:alpha}", 
            async (Guid requestId, string airportcode, string flightnumber, IScheduleServices scheduleServices) =>
                await GetArrivingFlightsByFlightNumberAsync(requestId, airportcode, flightnumber, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/arriving/byairline/{airlinname:alpha}", 
            async (Guid requestId, string airportcode, string airlinename, IScheduleServices scheduleServices) =>
                await GetArrivingFlightsByAirlineAsync(requestId, airportcode, airlinename, scheduleServices));

        app.MapPost("/flights/{airport:alpha}/departing",
            async (Guid requestId, AddDepartingFlightRequest departingflightrequest, IScheduleServices scheduleservices) =>
                await AddDepartingFlightAsync(requestId, departingflightrequest, scheduleservices));

        app.MapPost("/flights/{airportcode:alpha}/arriving",
            async (Guid requestId, AddArrivingFlightRequest arrivingFlightRequest, IScheduleServices scheduleservices) =>
                await AddArrivingFlightAsync(requestId, arrivingFlightRequest, scheduleservices));

        app.MapPut("/flights/{airportcode:alpha}/{flightnumber:alpha}", UpdateFlightAsync)
           .WithParameterValidation(requireParameterAttribute: true);

        app.MapDelete("/flights/{airportcode:alpha}/{flightnumber:alpha}", RemoveFlightAsync)
           .WithParameterValidation(requireParameterAttribute: true);

        return app;
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetFlightsAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId,
        [Validate] string airportcode,
        IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsAsync(
Guid requestId, string airportcode, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByDestinationAsync(
Guid requestId, string airportcode, string destination, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByTimeFrameAsync(
Guid requestId, string airportcode, DateTime start, DateTime end, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByGateAsync(
Guid requestId, string airportcode, string gatenumber, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByFlightNumberAsync(
Guid requestId, string airportcode, string flightnumber, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByAirlineAsync(
Guid requestId, string airportcode, string airlinename, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsAsync(
Guid requestId, string airportcode, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsyOriginAsync(
Guid requestId, string airportcode, string origin, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByTimeFrameAsync(
Guid requestId, string airportcode, DateTime start, DateTime end, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByGateAsync(
Guid requestId, string airportcode, string gatenumber, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByFlightNumberAsync(
Guid requestId, string airportcode, string flightnumber, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByAirlineAsync(
Guid requestId, string airportcode, string airlinename, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    public static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> AddDepartingFlightAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId,                                                                                                       
        [Validate] AddDepartingFlightRequest request,                                                                                                       
        [AsParameters] IScheduleServices services)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    public static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> AddArrivingFlightAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId,
        [Validate] AddArrivingFlightRequest request,
        [AsParameters] IScheduleServices services)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> UpdateFlightAsync(HttpContext context)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> RemoveFlightAsync(HttpContext context)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }
}
