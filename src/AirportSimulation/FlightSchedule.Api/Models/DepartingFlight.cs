using System.ComponentModel.DataAnnotations;

namespace FlightSchedule.Api.Models;

public class DepartingFlight
{
    [Key]
    public string? Number { get; set; }
    public DateTime Scheduled { get; set; }
    public string? Destination { get; set; }
    public string? Airline { get; set; }
    public string? Status { get; set; }
}
