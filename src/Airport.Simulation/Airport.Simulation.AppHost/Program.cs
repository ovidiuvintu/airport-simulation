using System.Runtime.Intrinsics.Arm;

var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.Airport_Scheduler>("airport-scheduler");

builder.AddProject<Projects.Gate_Simulator>("gate-simulator");

builder.AddProject<Projects.Runway_Simulator>("runway-simulator");

builder.AddProject<Projects.Taxi_Simulator>("taxi-simulator");

var airportServerApi = builder.AddProject<Projects.Airport_Server>("airport-server");

var reactApp = builder.AddNpmApp("airport-client", "../../Airport.Client/airport-client", "npm start");
reactApp.WithReference(airportServerApi);

builder.Build().Run();
