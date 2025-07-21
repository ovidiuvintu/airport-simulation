using Microsoft.EntityFrameworkCore;
using Airport.Service.Repository.Config;

//dotnet ef migrations add InitialCreate
//To undo this action, use 'ef migrations remove'
//dotnet ef database update
namespace Airport.Service.Repository;

public class AirportContext : DbContext
{
    public AirportContext(DbContextOptions<AirportContext> options) : base(options)
    {
    }

    public DbSet<Entities.Airport> Airports { get; set; }
    public DbSet<Entities.Terminal> Terminals { get; set; }
    public DbSet<Entities.Concourse> Concourses { get; set; }
    public DbSet<Entities.Gate> Gates { get; set; }
    public DbSet<Entities.Taxiway> Taxyways { get; set; }
    public DbSet<Entities.Runway> Runways { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        //builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        builder.ApplyConfiguration(new AirportConfiguration());
        builder.ApplyConfiguration(new TerminalConfiguration());
        builder.ApplyConfiguration(new ConcourseConfiguration());
        builder.ApplyConfiguration(new GateConfiguration());
        builder.ApplyConfiguration(new TaxiwayConfiguration());
        builder.ApplyConfiguration(new RunwayConfiguration());
    }
}
