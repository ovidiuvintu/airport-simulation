using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.Entities;

public enum GateType
{
    Departure,
    Arrival,
    Transfer
}

public class Gate : Entity
{
    [Required]
    public Guid ConcourseId { get; set; }
    [Required]
    public required Concourse Concourse { get; set; }
    [Required]
    public required string Name { get; set; }
    [Required]
    public GateType GateType { get; set; }
    [Required]
    public bool IsInternational { get; set; }
}
