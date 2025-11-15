using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace AirportManagement.Service.Repository.Entities;

public enum GateType
{
    Departure,
    Arrival,
    Transfer
}

public class Gate : BaseEntity
{
    [Required]
    public Guid ConcourseId { get; set; }

    // New FK to Airport
    [Required]
    public Guid AirportId { get; set; }

    // Navigation
    public Airport Airport { get; set; }

    [Required]
    public required string Name { get; set; } //A-38
    [Required]
    public GateType GateType { get; set; }
    [Required]
    public bool IsInternational { get; set; }
}
