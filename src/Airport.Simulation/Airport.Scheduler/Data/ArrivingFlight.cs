using Airport.Scheduler.Data;
using System.ComponentModel.DataAnnotations;

namespace Airport.Scheduler.Data;

public sealed class ArrivingFlight
{
    public int Id { get; set; }

    [Required]
    public string? AirportCode { get; set; }

    public string? FlightNumber { get; set; }

    public Carrier? Carrier { get; set; }

    public string? Origin { get; set; }

    public DateTime ScheduledArrivalTime { get; set; }

    public DateTime ActualArrivalTime { get; set; }

    public FlightStatus? FlightStatus { get; set; }
}
