using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.Entities;

public class Terminal : Entity
{
    [Required]
    public Guid AirportId { get; set; }
    [Required]
    public required Airport Airport { get; set; } // Navigation property
    [Required]
    public required string Name { get; set; }
    [Required]
    public required IEnumerable<Concourse> Concourses { get; set; }
}
