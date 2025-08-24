namespace Infrastructure.Interfaces;

public interface IRepository<TEntity> where TEntity : IEntity
{
    Task<IEnumerable<TEntity>> GetAllAsync();
    Task<TEntity?> GetByIdAsync(int id);
    Task<int> AddAsync(TEntity entity);
    Task<int> Update(TEntity entity);
    Task DeleteAsync(TEntity entity);
}
