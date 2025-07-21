using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.DTOs;

public class TerminalDto : BaseDto
{
    [Required]
    public Guid AirportId { get; set; }
    [Required]
    public required string Name { get; set; }
}
