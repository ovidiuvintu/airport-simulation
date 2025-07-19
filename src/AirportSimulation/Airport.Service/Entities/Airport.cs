using Infrastructure;

namespace Airport.Service.Entities;

public class Airport : Entity
{
    public string? Name { get; set; }
    public string? Description { get; set; }
    public string? AirportCode { get; set; }
    public IEnumerable<Terminal>? Terminals { get; set; }
    public IEnumerable<Runway>? Runways { get; set; }
    public IEnumerable<Taxiway>? Taxiways { get; set; }
}
