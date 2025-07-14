using System.ComponentModel.DataAnnotations;

namespace Airport.Scheduler.Data;

public sealed class DepartingFlight
{
    public int Id { get; set; }

    [Required]
    public Airport? Origin { get; set; }

    [Required]
    public string? FlightNumber { get; set; }

    [Required]
    public Carrier? Carrier { get; set; }

    [Required]
    public Airport? Destination { get; set; }

    [Required]
    public DateTime ScheduledDepartureTime { get; set; }

    public FlightStatus? FlightStatus { get; set; }

    public CancellationReason? ReasonOfCancelation { get; set; }

}
