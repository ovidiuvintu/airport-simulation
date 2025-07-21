using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.DTOs;

public class ConcourseDto : BaseDto
{
    [Required]
    public Guid TerminalId { get; set; }
    [Required]                                                
    public required string Name { get; set; } //concourse A (gates 1-20)
}
