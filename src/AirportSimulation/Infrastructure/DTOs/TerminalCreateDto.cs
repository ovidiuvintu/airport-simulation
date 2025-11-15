using System.ComponentModel.DataAnnotations;

namespace Infrastructure.DTOs;

public sealed record TerminalCreateDto(
    [Required][StringLength(255, MinimumLength = 5)] string Name
);
