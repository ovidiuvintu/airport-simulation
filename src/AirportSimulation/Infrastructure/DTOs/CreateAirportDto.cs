using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Infrastructure.DTOs;

public sealed record CreateAirportDto(
    [Required][StringLength(255, MinimumLength = 5)] string Name,
    [StringLength(255)] string? Description,
    [Required][StringLength(5, MinimumLength = 3)] string AirportCode,
    [Required] IEnumerable<TerminalDto> Terminals,
    [ReadOnly(true)] DateTime DateCreated,
    [ReadOnly(true)] DateTime DateUpdated);