using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Schedule.Service.Apis;

public static class ScheduleApi
{
    public static IEndpointRouteBuilder MapScheduleApi(this IEndpointRouteBuilder app)
    {
        var vApi = app.NewVersionedApi("ScheduleSpecification");
        var api = vApi.MapGroup("api/schedulespecification").HasApiVersion(1, 0);
        var v1 = vApi.MapGroup("api/schedulespecification").HasApiVersion(1, 0);

        return app;
    }
}