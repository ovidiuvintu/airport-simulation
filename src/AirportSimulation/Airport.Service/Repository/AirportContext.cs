using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

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

    public class AirportConfiguration : IEntityTypeConfiguration<Entities.Airport>
    {
        public void Configure(EntityTypeBuilder<Entities.Airport> builder)
        {
            builder.HasKey(c => c.Id); // Set the primary key
            builder.Property(c => c.AirportCode)
                .IsRequired()
                .HasMaxLength(3);
            builder.Property(c => c.Name)
                .IsRequired()
                .HasMaxLength(120);
            builder.Property(c => c.Description)
                .HasMaxLength(200);
        }
    }

    public class TerminalConfiguration : IEntityTypeConfiguration<Entities.Terminal>
    {
        public void Configure(EntityTypeBuilder<Entities.Terminal> builder)
        {
            builder.HasKey(c => c.Id); // Set the primary key

            builder.Property(c => c.Name)
                .IsRequired()
                .HasMaxLength(120);

            builder.HasOne(p => p.Airport) // A terminal has one Airport
                   .WithMany(c => c.Terminals) // An airport has many terminals
                   .HasForeignKey(p => p.AirportId); // Specify AirportId as the foreign key
        }
    }

    public class ConcourseConfiguration : IEntityTypeConfiguration<Entities.Concourse>
    {
        public void Configure(EntityTypeBuilder<Entities.Concourse> builder)
        {
            builder.HasKey(c => c.Id); // Set the primary key

            builder.Property(c => c.Name)
                .IsRequired()
                .HasMaxLength(120);

            builder.HasOne(p => p.Terminal) // A concourse has one Terminal
                   .WithMany(c => c.Concourses) // An Terminal has many concourses
                   .HasForeignKey(p => p.TerminalId); // Specify TerminalId as the foreign key
        }
    }

    public class GateConfiguration : IEntityTypeConfiguration<Entities.Gate>
    {
        public void Configure(EntityTypeBuilder<Entities.Gate> builder)
        {
            builder.HasKey(c => c.Id); // Set the primary key

            builder.Property(c => c.Name)
                .IsRequired()
                .HasMaxLength(120);

            builder.HasOne(p => p.Concourse) // A gate has one Concourse
                   .WithMany(c => c.Gates) // A Concourse has many gates
                   .HasForeignKey(p => p.ConcourseId); // Specify ConcourseId as the foreign key
        }
    }

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
