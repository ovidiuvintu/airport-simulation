var builder = DistributedApplication.CreateBuilder(args);

var airportManagementApi = builder.AddProject<Projects.AirportManagement_Service>("airport-management-service");

var rampControllerApi = builder.AddProject<Projects.RampController_Service>("ramp-controller-service");

var groundMovementControllerApi = builder.AddProject<Projects.GroundMovementController_Service>("ground-movement-controller-service");

var trafficControlTowerApi = builder.AddProject<Projects.TrafficControlTower_Service>("traffic-control-tower-service");

builder.AddNpmApp("airport-simulation", "../airport-simulation-client")
    .WithReference(trafficControlTowerApi)
    .WaitFor(trafficControlTowerApi)
    .WithReference(groundMovementControllerApi)
    .WaitFor(groundMovementControllerApi)
    .WithReference(rampControllerApi)
    .WaitFor(rampControllerApi)
    .WithReference(airportManagementApi)
    .WaitFor(airportManagementApi)
    .WithEnvironment("BROWSER", "none") // Disable opening browser on npm start
    .WithHttpEndpoint(env: "PORT")
    .WithExternalHttpEndpoints()
    .PublishAsDockerFile();

builder.Build().Run();
