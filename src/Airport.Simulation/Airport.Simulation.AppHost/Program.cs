var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.Airport_Scheduler>("airport-scheduler");

builder.AddProject<Projects.Gate_Simulator>("gate-simulator");

builder.AddProject<Projects.Runway_Simulator>("runway-simulator");

builder.AddProject<Projects.Taxi_Simulator>("taxi-simulator");

var airportServerApi = builder.AddProject<Projects.Airport_Server>("airport-server");

builder.AddNpmApp("react", "../AspireJavaScript.React")
    .WithReference(airportServerApi)
    .WithEnvironment("BROWSER", "none") // Disable opening browser on npm start
    .WithHttpEndpoint(env: "PORT")
    .WithExternalHttpEndpoints()
    .PublishAsDockerFile();

builder.Build().Run();
