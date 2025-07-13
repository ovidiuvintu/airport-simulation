using Airport.Scheduler.Moldel;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using MinimalApis.Extensions.Filters;

namespace Airport.Scheduler.Apis;

public static class ScheduleEndpointsExtension
{
    public static IEndpointRouteBuilder MapScheduleEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/flights/{airportcode:minlength(1)}", 
            async (string airportcode) =>
                await GetFlightsAsync(airportcode));

        app.MapGet("/flights/{airportcode:minlength(1)}/departing", 
            async (string airportcode) =>
                await GetDepartingFlightsAsync(airportcode));

        app.MapGet("/flights/{airportcode:minlength(1)}/departing/bydestination/{destination:minlength(1)}", 
            async (string airportcode, string destination) =>
               await GetDepartingFlightsByDestinationAsync(airportcode, destination));

        app.MapGet("/flights/{airportcode:minlength(1)}/departing/bytimeframe/starttime/{start:DateTime}/endtime/{end:datetime}", 
            async (string airportcode, DateTime start, DateTime end) =>
                await GetDepartingFlightsByTimeFrameAsync(airportcode, start, end));

        app.MapGet("/flights/{airportcode:minlength(1)}/departing/bygate/{gatenumber:minlength(1)}", 
            async (string airportcode, string gatenumber) =>
                await GetDepartingFlightsByGateAsync(airportcode, gatenumber));

        app.MapGet("/flights/{airportcode:minlength(1)}/departing/byflight/{flightnumber:minlength(1)}", 
            async (string airportcode, string flightnumber) =>
                await GetDepartingFlightsByFlightNumberAsync(airportcode, flightnumber));

        app.MapGet("/flights/{airportcode:minlength(1)}/departing/byairline/{airlinename:minlength(1)}", 
            async (string airportcode, string airlinename) => 
                await GetDepartingFlightsByAirlineAsync(airportcode, airlinename));

        app.MapGet("/flights/{airportcode:minlength(1)}/arriving", 
            async (string airportcode) =>
                await GetArrivingFlightsAsync(airportcode));

        app.MapGet("/flights/{airportcode:minlength(1)}/arriving/byorigin/{origin:minlength(1)}", 
            async (string airportcode, string origin) =>
                await GetArrivingFlightsyOriginAsync(airportcode, origin));

        app.MapGet("/flights/{airportcode:minlength(1)}/arriving/bytimeframe/starttime/{start:DateTime}/endtime/{end:datetime}", 
             async (string airportcode, DateTime start, DateTime end) =>
                await GetArrivingFlightsByTimeFrameAsync(airportcode, start, end));

        app.MapGet("/flights/{airportcode:minlength(1)}/arriving/bygate/{gatenumber:minlength(1)}", 
            async (string airportcode, string gatenumber) => 
                await GetArrivingFlightsByGateAsync(airportcode, gatenumber));

        app.MapGet("/flights/{airportcode:minlength(1)}/arriving/byflightnumber/{flightnumber:minlength(1)}", 
            async (string airportcode, string flightnumber) =>
                await GetArrivingFlightsByFlightNumberAsync(airportcode, flightnumber));

        app.MapGet("/flights/{airportcode:minlength(1)}/arriving/byairline/{airlinname:minlength(1)}", 
            async (string airportcode, string airlinename) =>
                await GetArrivingFlightsByAirlineAsync(airportcode, airlinename));

        //app.MapPost("/flights/{airport:airportcode}/departing",
        //    async (Guid requestId, AddDepartingFlightRequest departingflightrequest, ScheduleServices scheduleservices) =>
        //        await AddDepartingFlightAsync(requestId, departingflightrequest, scheduleservices));

        //app.MapPost("/flights/{airport:airportcode}/arriving", AddArrivingFlightAsync)
        //   .WithParameterValidation(requireParameterAttribute: true);

        //app.MapPut("/flights/{airport:airportcode}/{flight:flightnumber}", UpdateFlightAsync)
        //   .WithParameterValidation(requireParameterAttribute: true);

        //app.MapDelete("/flights/{airport:airportcode}/{flight:flightnumber}", RemoveFlightAsync)
        //   .WithParameterValidation(requireParameterAttribute: true);

        return app;
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetFlightsAsync(string airportcode)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsAsync(string airportcode)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByDestinationAsync(string airportcode, string destination)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByTimeFrameAsync(string airportcode, DateTime start, DateTime end)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByGateAsync(string airportcode, string gatenumber)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByFlightNumberAsync(string airportcode, string flightnumber)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetDepartingFlightsByAirlineAsync(string airportcode, string airlinename)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsAsync(string airportcode)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsyOriginAsync(string airportcode, string origin)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByTimeFrameAsync(string airportcode, DateTime start, DateTime end)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByGateAsync(string airportcode, string gatenumber)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByFlightNumberAsync(string airportcode, string flightnumber)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    private static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> GetArrivingFlightsByAirlineAsync(string airportcode, string airlinename)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    public static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> AddDepartingFlightAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId,                                                                                                       
        [Validate] AddDepartingFlightRequest request,                                                                                                       
        [AsParameters] ScheduleServices services)
    {
        await Task.CompletedTask;
        return TypedResults.Ok();
    }

    public static async Task<Results<Ok, BadRequest<string>, ValidationProblem>> AddArrivingFlightAsync(
        [FromHeader(Name = "x-requestid")] Guid requestId,
        [Validate] AddArrivingFlightRequest request,
        [AsParameters] ScheduleServices services)
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
