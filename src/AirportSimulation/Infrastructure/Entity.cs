using Infrastructure.Interfaces;

namespace Infrastructure
{
    public class Entity : IEntity<int>
    {
        public int Id { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    }
}
