using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Infrastructure.DTOs;

public enum GateType
{
    Departure,
    Arrival,
    Transfer
}

public sealed record GateDto(
    string Id,
    [Required] string ConcourseId,
    [Required] string Name,
    [Required] GateType GateType,
    [Required] bool IsInternational,
    [ReadOnly(true)] DateTime DateCreated,
    [ReadOnly(true)] DateTime DateUpdated
);
