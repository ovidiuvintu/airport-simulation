using Ardalis.Specification;

namespace Infrastructure.Interfaces;

public interface IRepository<T> : IRepositoryBase<T> where T : class
{
}
