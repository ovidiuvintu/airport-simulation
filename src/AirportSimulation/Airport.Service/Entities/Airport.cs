using Infrastructure;

namespace Airport.Service.Entities;

public class Airport : Entity
{
    public IEnumerable<Terminal>? Terminals { get; set; }
    public IEnumerable<Runway>? Runways { get; set; }
}
