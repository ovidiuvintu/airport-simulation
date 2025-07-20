using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.DTOs;

public enum Position
{
    Left,
    Right,
    Center
}

public class RunwayDto : BaseDto
{
    [Required]
    public string? Name { get; set; } 
    
    public int? MagneticHeading { get; set; }
    public bool? IsParallel { get; set; }
    public Position? Position { get; set; }
}
