using Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Infrastructure;

public class Repository<TEntity>(DbContext context) : IRepository<TEntity>
       where TEntity : class, IEntity
{
    private readonly DbSet<TEntity> _dbSet = context.Set<TEntity>();

    public async Task<IEnumerable<TEntity>> GetAllAsync()
    {
        try
        {
            return await _dbSet.ToListAsync();
        }
        catch (Exception e) when(e is not OperationCanceledException)
        {
            Console.WriteLine($"Caught ex while getting all record: {e.Message}");
            throw;
        }
    }

    public async Task<TEntity?> GetByIdAsync(int id)
    {
        return await _dbSet.FindAsync(id);
    }

    public async Task<int> AddAsync(TEntity entity)
    {
        try
        {
            await _dbSet.AddAsync(entity);
            return await context.SaveChangesAsync();
        }
        catch (Exception e) when (e is not OperationCanceledException)
        {
            Console.WriteLine($"Caught ex while adding a record: {e.Message}");
            throw;
        }
    }

    public async Task Update(TEntity entity)
    {
        try
        {
            _dbSet.Update(entity);
            await context.SaveChangesAsync();
        }
        catch (Exception e) when (e is not OperationCanceledException)
        {
            Console.WriteLine($"Caught ex while updating a record: {e.Message}");
            throw;
        }
    }

    public async Task DeleteAsync(TEntity entity)
    {
        try
        {
            _dbSet.Remove(entity);
            await context.SaveChangesAsync();
        }
        catch (Exception e) when (e is not OperationCanceledException)
        {
            Console.WriteLine($"Caught ex while updating a record: {e.Message}");
            throw;
        }
    }
}
