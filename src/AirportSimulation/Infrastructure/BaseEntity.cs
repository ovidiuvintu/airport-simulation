using Infrastructure.Interfaces;

namespace Infrastructure;

public class BaseEntity : IEntity
{
    public BaseEntity()
    {
        Id = Guid.NewGuid();
    }

    public Guid Id { get; }

    public DateTime Created { get; }

    public DateTime Updated { get; }
}
