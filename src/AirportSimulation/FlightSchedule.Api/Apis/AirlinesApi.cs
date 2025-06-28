
namespace FlightSchedule.Api.Apis;

public static class AirlinesApi
{
    public static RouteGroupBuilder MapAirlinesApi(this IEndpointRouteBuilder app)
    {
        var api = app.MapGroup("api/airlines").HasApiVersion(1, 0);
        api.MapGet("/airlines", GetAllAirlines)
            .WithName("ListAirlines")
            .WithSummary("List all airlines")
            .WithDescription("Get a paginated list of operating airlines.")
            .WithTags("Airlines")
            .WithOpenApi();
        return api;
    }

    private static async Task GetAllAirlines(HttpContext context)
    {
        //throw new NotImplementedException();
        await Task.CompletedTask;
    }
}