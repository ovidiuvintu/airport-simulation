using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Gate.Service.Apis;

public static class GateApi
{
    public static IEndpointRouteBuilder MapGateApi(this IEndpointRouteBuilder app)
    {
        var vApi = app.NewVersionedApi("GateSpecification");
        var api = vApi.MapGroup("api/gatespecification").HasApiVersion(1, 0);
        var v1 = vApi.MapGroup("api/gatespecification").HasApiVersion(1, 0);

        return app;

    }
}