using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.DTOs;

public class AirportDto : BaseDto
{
    [Required]
    public required string? Name { get; set; }

    public string? Description { get; set; }
    [Required]
    public required string? AirportCode { get; set; }
    [Required]
    public required DateTime DateCreated { get; set; }
    [Required]
    public required DateTime DateUpdated { get; set; }
}
