using System.ComponentModel.DataAnnotations;

namespace Infrastructure.DTOs;

//dtos are transfer object between different layers or different microservices. Records are ideal
public sealed record TerminalDto(
    string Id,
    [Required][StringLength(255, MinimumLength = 5)] string Name,
    [Required][StringLength(4, MinimumLength = 1)] string AirportId,
    [Required] DateTime DateCreated,
    [Required] DateTime DateUpdated);
