using System.ComponentModel.DataAnnotations;

namespace Infrastructure.DTOs;

public class ConcourseDto : BaseDto
{
    [Required]
    public required Guid TerminalId { get; set; }
    [Required]                                                
    public required string Name { get; set; } //concourse A (gates 1-20)

    [Required]
    public required DateTime DateCreated { get; set; }
    [Required]
    public required DateTime DateUpdated { get; set; }
}
