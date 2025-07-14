using System.ComponentModel.DataAnnotations;

namespace Airport.Scheduler.Data;

public sealed class ArrivingFlight
{
    public int Id { get; set; }

    [Required]
    public Airport? Destination { get; set; }

    [Required]
    public string? FlightNumber { get; set; }

    [Required]
    public Carrier? Carrier { get; set; }

    [Required]
    public Airport? Origin { get; set; }

    [Required]
    public DateTime ScheduledArrivalTime { get; set; }
}
