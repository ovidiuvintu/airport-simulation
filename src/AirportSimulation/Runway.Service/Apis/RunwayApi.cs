using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Runway.Service.Apis;

public static class RunwayApi
{
    public static IEndpointRouteBuilder MapRunwayApi(this IEndpointRouteBuilder app)
    {
        var vApi = app.NewVersionedApi("RunwaySpecification");
        var api = vApi.MapGroup("api/runwayspecification").HasApiVersion(1, 0);
        var v1 = vApi.MapGroup("api/runwayspecification").HasApiVersion(1, 0);

        return app;
    }
}
