using Asp.Versioning;
using Scalar.AspNetCore;

namespace FlightSchedule.Api;

public static partial class Extensions
{
    public static IApplicationBuilder UseDefaultOpenApi(this WebApplication app)
    {
        var configuration = app.Configuration;
        var openApiSection = configuration.GetSection("OpenApi");

        if (!openApiSection.Exists())
        {
            return app;
        }

        app.MapOpenApi();

        app.MapScalarApiReference(options =>
        {
            options.DefaultFonts = false;
            options.WithTitle("Flight schedule API")
                   .WithModels()
                   .WithTheme(ScalarTheme.Default)
                   .WithDefaultHttpClient(ScalarTarget.CSharp, ScalarClient.HttpClient);
        });
        app.MapGet("/", () => Results.Redirect("/scalar/v1")).ExcludeFromDescription();

        return app;
    }

    public static IHostApplicationBuilder AddDefaultOpenApi(
        this IHostApplicationBuilder builder,
        IApiVersioningBuilder? apiVersioning = default)
    {
        var openApi = builder.Configuration.GetSection("OpenApi");
        if (!openApi.Exists())
        {
            return builder;
        }

        if (apiVersioning is not null)
        {
            // the default format will just be ApiVersion.ToString(); for example, 1.0.
            // this will format the version as "'v'major[.minor][-status]"
            var versioned = apiVersioning.AddApiExplorer(options => options.GroupNameFormat = "'v'VVV");
            string[] versions = ["v1"];
            foreach (var description in versions)
            {
                builder.Services.AddOpenApi("v1", options =>
                {
                    options.OpenApiVersion = Microsoft.OpenApi.OpenApiSpecVersion.OpenApi3_0;
                    options.AddDocumentTransformer((document, context, cancellationToken)
                             => Task.CompletedTask);
                });
            }
        }

        return builder;
    }
}
