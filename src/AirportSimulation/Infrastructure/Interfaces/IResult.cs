namespace Infrastructure.Interfaces;

public interface IResult
{
    bool Success { get; }
    string? Error { get; init; }
}
