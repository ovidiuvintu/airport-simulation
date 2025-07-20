using Infrastructure.Interfaces;

namespace Infrastructure;

public class Entity : IEntity<Guid>
{
    public Entity()
    {
        Id = Guid.NewGuid();
    }

    public Guid Id { get; }
}
