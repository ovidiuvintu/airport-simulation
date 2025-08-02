var builder = DistributedApplication.CreateBuilder(args);

var scheduleApi = builder.AddProject<Projects.Schedule_Service>("schedule-service");

var taxiApi = builder.AddProject<Projects.Taxi_Service>("taxi-service");

var gateApi = builder.AddProject<Projects.Gate_Service>("gate-service");

var runwayApi = builder.AddProject<Projects.Runway_Service>("runway-service");

var airportApi = builder.AddProject<Projects.Airport_Service>("airport-service")
    .WaitFor(gateApi)
    .WaitFor(runwayApi);

builder.AddNpmApp("airport-simulation", "../airport-simulation-client")
    .WithReference(scheduleApi)
    .WaitFor(scheduleApi)
    .WithReference(taxiApi)
    .WaitFor(taxiApi)
    .WithReference(gateApi)
    .WaitFor(gateApi)
    .WithReference(runwayApi)
    .WaitFor(runwayApi)
    .WithReference(airportApi)
    .WaitFor(airportApi)
    .WithEnvironment("BROWSER", "none") // Disable opening browser on npm start
    .WithHttpEndpoint(env: "PORT")
    .WithExternalHttpEndpoints()
    .PublishAsDockerFile();

builder.Build().Run();
