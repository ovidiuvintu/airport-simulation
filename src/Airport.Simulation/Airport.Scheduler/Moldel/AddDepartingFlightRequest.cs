using Airport.Scheduler.Data;
using System.ComponentModel.DataAnnotations;

namespace Airport.Scheduler.Moldel;

public class AddDepartingFlightRequest
{
    public string? OriginAirportName { get; set; }

    public string? OriginAirportDescription { get; set; }

    public string? OriginAirportCode { get; set; }

    public string? FlightNumber { get; set; }

    public string? CarrierName { get; set; }

    public string? CarrierDescription { get; set; }

    public string? CarrierCode { get; set; }

    public string? DestinationAirportName { get; set; }

    public string? DestinationAirportDescription { get; set; }

    public string? DestinationAirportCode { get; set; }

    public DateTime ScheduledDepartureTime { get; set; }
}