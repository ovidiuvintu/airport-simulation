using Infrastructure.Interfaces;

namespace Infrastructure;

public class Result : IResult
{
    public bool Success => throw new NotImplementedException();

    public string? Error { get => throw new NotImplementedException(); init => throw new NotImplementedException(); }
}
