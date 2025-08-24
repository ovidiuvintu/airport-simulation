using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Infrastructure.DTOs;

//dtos are transfer object between different layers or different microservices. Records are ideal
public sealed record AirportDTO(
    string Id,
    [Required][StringLength(255, MinimumLength = 5)] string Name,
    string? Description,
    [Required][StringLength(5, MinimumLength = 3)] string AirportCode,
    [Required] IEnumerable<TerminalDto> Terminals,
    [ReadOnly(true)] DateTime DateCreated,
    [ReadOnly(true)] DateTime DateUpdated);