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
            async (string airportcode, IScheduleServices scheduleServices) =>
                await GetFlightsAsync(airportcode, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/departing", 
            async (string airportcode, IScheduleServices scheduleServices) =>
                await GetDepartingFlightsAsync(airportcode, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/departing/bydestination/{destination:alpha}", 
            async (string airportcode, string destination, IScheduleServices scheduleServices) =>
               await GetDepartingFlightsByDestinationAsync(airportcode, destination, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/departing/bytimeframe/starttime/{start:DateTime}/endtime/{end:datetime}", 
            async (string airportcode, DateTime start, DateTime end, IScheduleServices scheduleServices) =>
                await GetDepartingFlightsByTimeFrameAsync(airportcode, start, end, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/departing/bygate/{gatenumber:alpha}", 
            async (string airportcode, string gatenumber, IScheduleServices scheduleServices) =>
                await GetDepartingFlightsByGateAsync(airportcode, gatenumber, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/departing/byflight/{flightnumber:alpha}", 
            async (string airportcode, string flightnumber, IScheduleServices scheduleServices) =>
                await GetDepartingFlightsByFlightNumberAsync(airportcode, flightnumber, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/departing/byairline/{airlinename:alpha}", 
            async (string airportcode, string airlinename, IScheduleServices scheduleServices) => 
                await GetDepartingFlightsByAirlineAsync(airportcode, airlinename, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/arriving", 
            async (string airportcode, IScheduleServices scheduleServices) =>
                await GetArrivingFlightsAsync(airportcode, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/arriving/byorigin/{origin:alpha}", 
            async (string airportcode, string origin, IScheduleServices scheduleServices) =>
                await GetArrivingFlightsyOriginAsync(airportcode, origin, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/arriving/bytimeframe/starttime/{start:DateTime}/endtime/{end:datetime}", 
             async (string airportcode, DateTime start, DateTime end, IScheduleServices scheduleServices) =>
                await GetArrivingFlightsByTimeFrameAsync(airportcode, start, end, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/arriving/bygate/{gatenumber:alpha}", 
            async (string airportcode, string gatenumber, IScheduleServices scheduleServices) => 
                await GetArrivingFlightsByGateAsync(airportcode, gatenumber, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/arriving/byflightnumber/{flightnumber:alpha}", 
            async (string airportcode, string flightnumber, IScheduleServices scheduleServices) =>
                await GetArrivingFlightsByFlightNumberAsync(airportcode, flightnumber, scheduleServices));

        app.MapGet("/flights/{airportcode:alpha}/arriving/byairline/{airlinname:alpha}", 
            async (string airportcode, string airlinename, IScheduleServices scheduleServices) =>
                await GetArrivingFlightsByAirlineAsync(airportcode, airlinename, scheduleServices));

        app.MapPost("/flights/{airport:alpha}/departing",
            async (Guid requestId, AddDepartingFlightRequest departingflightrequest, IScheduleServices scheduleservices) =>
                await AddDepartingFlightAsync(requestId, departingflightrequest, scheduleservices));

        app.MapPost("/flights/{airport:airportcode}/arriving",
            async (Guid requestId, AddArrivingFlightRequest arrivingFlightRequest, IScheduleServices scheduleservices) =>
                await AddArrivingFlightAsync(requestId, arrivingFlightRequest, scheduleservices));

        app.MapPut("/flights/{airport:airportcode}/{flight:flightnumber}", UpdateFlightAsync)
           .WithParameterValidation(requireParameterAttribute: true);

        app.MapDelete("/flights/{airport:airportcode}/{flight:flightnumber}", RemoveFlightAsync)
           .WithParameterValidation(requireParameterAttribute: true);

        return app;
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetFlightsAsync(
        string airportcode,
        IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsAsync(
        string airportcode, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByDestinationAsync(
        string airportcode, string destination, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByTimeFrameAsync(
        string airportcode, DateTime start, DateTime end, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByGateAsync(
        string airportcode, string gatenumber, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByFlightNumberAsync(
        string airportcode, string flightnumber, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByAirlineAsync(
        string airportcode, string airlinename, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsAsync(
        string airportcode, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsyOriginAsync(
        string airportcode, string origin, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByTimeFrameAsync(
        string airportcode, DateTime start, DateTime end, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByGateAsync(
        string airportcode, string gatenumber, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByFlightNumberAsync(
        string airportcode, string flightnumber, IScheduleServices scheduleServices)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByAirlineAsync(
        string airportcode, string airlinename, IScheduleServices scheduleServices)
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
