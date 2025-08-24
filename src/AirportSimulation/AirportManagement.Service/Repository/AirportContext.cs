using Microsoft.EntityFrameworkCore;
using Airport.Service.Repository.Config;

//dotnet ef migrations add InitialCreate
//To undo this action, use 'ef migrations remove'
//dotnet ef database update
namespace AirportManagement.Service.Repository;

public class AirportContext(DbContextOptions<AirportContext> options) : DbContext(options)
{
    public DbSet<Entities.Airport> Airports { get; set; }
    public DbSet<Entities.Terminal> Terminals { get; set; }
    public DbSet<Entities.Gate> Gates { get; set; }
    public DbSet<Entities.Taxiway> Taxyways { get; set; }
    public DbSet<Entities.Runway> Runways { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        //builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        builder.ApplyConfiguration(new AirportConfiguration());
        builder.ApplyConfiguration(new TerminalConfiguration());
        builder.ApplyConfiguration(new GateConfiguration());
        builder.ApplyConfiguration(new TaxiwayConfiguration());
        builder.ApplyConfiguration(new RunwayConfiguration());
    }

    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        foreach (var entry in ChangeTracker.Entries())
        {
            if (entry.Entity is Entities.Airport entityWithTimestamps)
            {
                switch (entry.State)
                {
                    case EntityState.Added:
                        entityWithTimestamps.Created = DateTime.UtcNow;
                        entityWithTimestamps.Updated = DateTime.UtcNow;
                        break;
                    case EntityState.Modified:
                        entityWithTimestamps.Updated = DateTime.UtcNow;
                        break;
                }
            }
        }

        // Call the base implementation to actually save the changes
        var result = await base.SaveChangesAsync(cancellationToken);

        // Add your custom logic here after saving
        // For example, publishing domain events

        return result;
    }
}
