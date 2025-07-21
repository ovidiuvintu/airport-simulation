using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.DTOs;

public class TerminalDto : BaseDto
{
    [Required]
    public required Guid AirportId { get; set; }
    [Required]
    public required string Name { get; set; }
    [Required]
    public required DateTime DateCreated { get; set; }
    [Required]
    public required DateTime DateUpdated { get; set; }

}
