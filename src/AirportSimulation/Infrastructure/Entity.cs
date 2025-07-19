using Infrastructure.Interfaces;

namespace Infrastructure;

public class Entity : IEntity<Guid>
{
    public Guid Id { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
}
