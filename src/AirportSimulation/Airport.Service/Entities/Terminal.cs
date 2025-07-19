using Infrastructure;

namespace Airport.Service.Entities;

public class Terminal : Entity
{
    public string? Name { get; set; }
    public Concourse? Concourse { get; set; }
}
