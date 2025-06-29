using System.ComponentModel.DataAnnotations;

namespace FlightSchedule.Api.Models;

public class ArrivingFlight
{
    [Key]
    public string? Flight { get; set; }
    public DateTime Time { get; set; }
    public string? From { get; set; }
    public string? Airline { get; set; }
    public string? Aircraft { get; set; }
    public string? Status { get; set; }
}