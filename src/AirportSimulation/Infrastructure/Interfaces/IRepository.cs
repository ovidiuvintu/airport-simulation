using System.Linq.Expressions;

namespace Infrastructure.Interfaces;

public interface IRepository<TEntity> where TEntity : IEntity
{
    Task<IEnumerable<TEntity>> GetAllAsync();
    // New overload to allow callers to request navigation properties via Include
    Task<IEnumerable<TEntity>> GetAllAsync(params Expression<Func<TEntity, object>>[] includes);
    Task<TEntity?> GetByIdAsync(int id);
    Task<int> AddAsync(TEntity entity);
    Task<int> Update(TEntity entity);
    Task DeleteAsync(TEntity entity);
}
