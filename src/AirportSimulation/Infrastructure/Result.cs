using Infrastructure.Interfaces;

namespace Infrastructure;

public class Result : IResult
{
    public bool Success { get; set; }

    public string? Error { get; set; }
}

public class Result<T> : Result
{
    public T? Data { get; set; }
}
