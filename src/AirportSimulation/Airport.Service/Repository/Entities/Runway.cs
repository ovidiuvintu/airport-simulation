using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.Repository.Entities;

public enum Position
{
    Left,
    Right,
    Center
}

public class Runway : Entity
{
    [Required]
    public string? Name { get; set; } 
    
    public int? MagneticHeading { get; set; }
    public bool? IsParallel { get; set; }
    public Position? Position { get; set; }
}
