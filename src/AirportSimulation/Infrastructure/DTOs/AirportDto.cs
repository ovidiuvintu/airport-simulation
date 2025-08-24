namespace Infrastructure.DTOs;

//dtos are transfer object between different layers or different microservices. Records are ideal
public sealed record AirportDTO(
    string Id,
    string Name,
    string? Description,
    string AirportCode,
    IEnumerable<TerminalDto> Terminals,
    DateTime DateCreated,
    DateTime DateUpdated);