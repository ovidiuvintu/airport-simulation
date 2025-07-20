using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.DTOs;

public class AirportDto : Entity
{
    [Required]
    public string? Name { get; set; }
    public string? Description { get; set; }
    [Required]
    public string? AirportCode { get; set; }
    [Required]
    public IEnumerable<TerminalDto>? Terminals { get; set; }
    [Required]
    public IEnumerable<RunwayDto>? Runways { get; set; }
    [Required]
    public IEnumerable<Taxiway>? Taxiways { get; set; }
}
