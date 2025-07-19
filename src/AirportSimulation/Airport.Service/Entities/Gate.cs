using Infrastructure;

namespace Airport.Service.Entities;

public enum GateType
{
    Departure,
    Arrival,
    Transfer
}

public class Gate : Entity
{
    public string? Name { get; set; }
    public GateType? GateType { get; set; }
    public bool? IsInternational { get; set; }
}
