using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace AirportManagement.Service.Repository.Entities;

public enum Position
{
    Left,
    Right,
    Center
}

public class Runway : BaseEntity
{
    [Required]
    public string Name { get; set; } 
    
    public int? MagneticHeading { get; set; }
    public bool? IsParallel { get; set; }
    public Position? Position { get; set; }

    // Airport relationship
    [Required]
    public Guid AirportId { get; set; }
    public Airport Airport { get; set; }
}
