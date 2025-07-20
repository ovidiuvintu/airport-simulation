using Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

public class UnitOfWork(DbContext context) : IUnitOfWork, IDisposable
{
    private bool _disposed;
    private readonly DbContext _context = context;

    public async Task SaveAsync(CancellationToken cancellationToken)
    {
        await _context.SaveChangesAsync(cancellationToken);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!_disposed)
        {
            if (disposing)
            {
                _context?.Dispose();
            }

            _disposed = true;
        }
    }

    ~UnitOfWork()
    {
        Dispose(false);
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }
}