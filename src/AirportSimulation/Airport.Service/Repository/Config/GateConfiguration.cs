using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Airport.Service.Repository.Config;

internal sealed class GateConfiguration : IEntityTypeConfiguration<Entities.Gate>
{
    public void Configure(EntityTypeBuilder<Entities.Gate> builder)
    {
        builder.HasKey(c => c.Id); // Set the primary key
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.Property(c => c.Name)
            .IsRequired()
            .HasMaxLength(120);

        builder.Property(c => c.ConcourseId)
            .IsRequired();

        builder.Property(c => c.IsInternational)
            .IsRequired();

        builder.ToTable("Gate");
    }
}
