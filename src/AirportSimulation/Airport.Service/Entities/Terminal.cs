using Infrastructure;

namespace Airport.Service.Entities;

public class Terminal : Entity
{
    public IEnumerable<Gate>? Gates { get; set; }
}
