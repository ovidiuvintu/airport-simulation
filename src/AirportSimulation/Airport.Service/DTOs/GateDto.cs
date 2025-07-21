using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.DTOs;

public enum GateType
{
    Departure,
    Arrival,
    Transfer
}

public class GateDto : BaseDto
{
    [Required]
    public required Guid ConcourseId { get; set; }
    [Required]
    public required string Name { get; set; } //A-38
    [Required]
    public required GateType GateType { get; set; }
    [Required]
    public required bool IsInternational { get; set; }
    [Required]
    public required DateTime DateCreated { get; set; }
    [Required]
    public required DateTime DateUpdated { get; set; }
}
