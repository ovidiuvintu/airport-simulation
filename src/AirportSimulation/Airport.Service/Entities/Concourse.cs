using Infrastructure;

namespace Airport.Service.Entities;

public class Concourse : Entity
{
    public IEnumerable<Gate>? Gates { get; set; }
}
