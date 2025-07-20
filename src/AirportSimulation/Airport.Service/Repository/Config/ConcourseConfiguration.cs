using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Airport.Service.Repository.Config;

internal sealed class ConcourseConfiguration : IEntityTypeConfiguration<Entities.Concourse>
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

        builder.ToTable("Concourse");
    }
}
