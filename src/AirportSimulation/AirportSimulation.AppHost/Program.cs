var builder = DistributedApplication.CreateBuilder(args);

var scheduleApi = builder.AddProject<Projects.Schedule_Service>("schedule-service");

var taxiApi = builder.AddProject<Projects.Taxi_Service>("taxi-service");

var gateApi = builder.AddProject<Projects.Gate_Service>("gate-service");

var runwayApi = builder.AddProject<Projects.Runway_Service>("runway-service");

builder.AddNpmApp("airport-simulation", "../airport-simulation")
    .WithReference(scheduleApi)
    .WithReference(taxiApi)
    .WithReference(gateApi)
    .WithReference(runwayApi)
    .WithEnvironment("BROWSER", "none") // Disable opening browser on npm start
    .WithHttpEndpoint(env: "PORT")
    .WithExternalHttpEndpoints()
    .PublishAsDockerFile();

builder.Build().Run();
