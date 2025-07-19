using Infrastructure;

namespace Airport.Service.Entities;

public enum Position
{
    Left,
    Right,
    Center
}

public class Runway : Entity
{
    public string? Name { get; set; }
    public int? MagneticHeading { get; set; }
    public bool? IsParallel { get; set; }
    public Position? Position { get; set; }
}
