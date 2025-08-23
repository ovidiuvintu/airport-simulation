using Infrastructure.DTOs;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.DTOs;

//dtos are transfer object between different layers or different microservices
public class AirportDto : BaseDto
{
    [Required]
    [StringLength(255, MinimumLength = 5)]
    public required string Name { get; set; }

    public string? Description { get; set; }

    [Required]
    [StringLength(5, MinimumLength = 3)]
    public required string AirportCode { get; set; }

    [Required]
    public required DateTime DateCreated { get; set; }

    [Required]
    public required DateTime DateUpdated { get; set; }
}
