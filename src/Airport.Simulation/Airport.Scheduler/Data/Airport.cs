using System.ComponentModel.DataAnnotations;

namespace Airport.Scheduler.Data;

public sealed class Airport
{
    public int Id { get; set; }

    [Required]
    public string? AirportName { get; set; }

    public string? AirportDescription { get; set; }

    [Required]
    public string? AirportCode { get; set; }
}
