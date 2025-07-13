using System.ComponentModel.DataAnnotations;

namespace Airport.Data;

public sealed class ArrivingFlight
{
    public int Id { get; set; }

    [Required]
    public string? AirportCode { get; set; }

    public string? FlightNumber { get; set; }

    public string? Origin { get; set; }
}
