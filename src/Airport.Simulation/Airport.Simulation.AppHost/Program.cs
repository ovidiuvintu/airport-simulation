var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.Airport_Scheduler>("airport-scheduler");

builder.AddProject<Projects.Gate_Simulator>("gate-simulator");

builder.AddProject<Projects.Runway_Simulator>("runway-simulator");

builder.AddProject<Projects.Taxi_Simulator>("taxi-simulator");

builder.AddProject<Projects.Airport_Server>("airport-server");

builder.Build().Run();
