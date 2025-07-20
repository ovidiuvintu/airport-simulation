using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.DTOs;

public class TerminalDto : BaseDto
{
    [Required]
    public Guid AirportId { get; set; }
    [Required]
    public required AirportDto Airport { get; set; } // Navigation property
    [Required]
    public required string Name { get; set; }
    [Required]
    public required IEnumerable<ConcourseDto> Concourses { get; set; }
}
