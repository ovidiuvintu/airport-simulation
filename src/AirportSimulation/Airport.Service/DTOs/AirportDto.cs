using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.DTOs;

public class AirportDto : BaseDto
{
    [Required]
    public string? Name { get; set; }
    public string? Description { get; set; }
    [Required]
    public string? AirportCode { get; set; }
}
