using Airport.Scheduler.Data;
using System.ComponentModel.DataAnnotations;

namespace Airport.Data;

public sealed class DepartingFlight
{
    public int Id { get; set; }

    [Required]
    public string? AirportCode { get; set; }

    public string? FlightNumber { get; set; }

    public Carrier? Carrier { get; set; }

    public string? Destination { get; set; }

    public DateTime ScheduledDepartureTime { get; set; }

    public DateTime ActualDepartureTime { get; set; }

    public FlightStatus? FlightStatus { get; set; }

    public CancellationReason? ReasonOfCancelation { get; set; }

}
