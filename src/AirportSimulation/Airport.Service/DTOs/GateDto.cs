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
    public Guid ConcourseId { get; set; }
    [Required]
    public required string Name { get; set; } //A-38
    [Required]
    public GateType GateType { get; set; }
    [Required]
    public bool IsInternational { get; set; }
}
