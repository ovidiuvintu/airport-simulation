using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.DTOs;

public class ConcourseDto : Entity
{
    [Required]
    public Guid TerminalId { get; set; }
    [Required]
    public required TerminalDto Terminal { get; set; } // Navigation property
    [Required]                                                
    public required string Name { get; set; } //concourse A (gates 1-20)
    [Required]
    public required IEnumerable<GateDto> Gates { get; set; }
}
