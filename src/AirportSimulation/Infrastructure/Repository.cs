using Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

public class Repository<TEntity> : IRepository<TEntity>
       where TEntity : class, IEntity
{
    private readonly DbSet<TEntity> _dbSet;
    private readonly DbContext _dbContext;

    public Repository(DbContext context)
    {
        _dbContext = context;
        _dbSet = context.Set<TEntity>();
    }

    public async Task<IEnumerable<TEntity>> GetAllAsync()
    {
        return await _dbSet.ToListAsync();
    }

    public async Task<TEntity> GetByIdAsync(int id)
    {
        return await _dbSet.FindAsync(id);
    }

    public async Task<int> AddAsync(TEntity entity)
    {
        await _dbSet.AddAsync(entity);
        return await _dbContext.SaveChangesAsync();
    }

    public void Update(TEntity entity)
    {
        _dbSet.Update(entity);
    }

    public void Delete(TEntity entity)
    {
        _dbSet.Remove(entity);
    }
}
