using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Taxi.Service.Apis;

public static class TaxiApi
{
    public static IEndpointRouteBuilder MapTaxiApi(this IEndpointRouteBuilder app)
    {
        var vApi = app.NewVersionedApi("TaxiSpecification");
        var api = vApi.MapGroup("api/taxispecification").HasApiVersion(1, 0);
        var v1 = vApi.MapGroup("api/taxispecification").HasApiVersion(1, 0);

        return app;
    }
}
