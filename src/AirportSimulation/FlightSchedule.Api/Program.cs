using eShop.ServiceDefaults;
using FlightSchedule.Api.Apis;

var builder = WebApplication.CreateBuilder(args);
var withApiVersioning = builder.Services.AddApiVersioning();
builder.AddDefaultOpenApi(withApiVersioning);
var app = builder.Build();

// Configure the HTTP request pipeline.
// 
app.UseHttpsRedirection();
app.UseDefaultOpenApi();
app.MapFlightsApi();

app.Run();