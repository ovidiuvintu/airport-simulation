namespace Infrastructure.Interfaces;

public interface IResult
{
    bool Success { get; set; }
    string? Error { get; set; }
}
