using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Airport.Service.Repository.Config;

internal sealed class ConcourseConfiguration : IEntityTypeConfiguration<Entities.Concourse>
{
    public void Configure(EntityTypeBuilder<Entities.Concourse> builder)
    {
        builder.HasKey(c => c.Id); // Set the primary key
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.Property(c => c.Name)
            .IsRequired()
            .HasMaxLength(120);

        builder.Property(c => c.TerminalId)
            .IsRequired();

        builder.ToTable("Concourse");
    }
}
