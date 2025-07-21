using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.Repository.Entities;

public class Airport : BaseEntity
{
    [Required]
    public string? Name { get; set; }
    public string? Description { get; set; }
    [Required]
    public string? AirportCode { get; set; }
    [Required]
    public IEnumerable<Terminal>? Terminals { get; set; }
    [Required]
    public IEnumerable<Runway>? Runways { get; set; }
    [Required]
    public IEnumerable<Taxiway>? Taxiways { get; set; }
}
