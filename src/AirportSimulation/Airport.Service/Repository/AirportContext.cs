using Microsoft.EntityFrameworkCore;

namespace Airport.Service.Repository;

public partial class AirportContext : DbContext
{
    public AirportContext()
    { }

    public AirportContext(DbContextOptions<AirportContext> options) : base(options)
    {
    }

    public DbSet<Entities.Airport> Airports { get; set; }
    public DbSet<Entities.Terminal> Terminals { get; set; }
    public DbSet<Entities.Concourse> Concourses { get; set; }
    public DbSet<Entities.Gate> Gates { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        //builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        builder.ApplyConfiguration(new AirportConfiguration());
        builder.ApplyConfiguration(new TerminalConfiguration());
        builder.ApplyConfiguration(new ConcourseConfiguration());
        builder.ApplyConfiguration(new GateConfiguration());
    }
}
