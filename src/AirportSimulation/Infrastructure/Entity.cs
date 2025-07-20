using Infrastructure.Interfaces;

namespace Infrastructure;

public class Entity : IEntity
{
    public Entity()
    {
        Id = Guid.NewGuid();
    }

    public Guid Id { get; }
}
