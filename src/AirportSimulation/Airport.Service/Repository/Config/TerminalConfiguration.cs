using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Airport.Service.Repository.Config;

internal sealed class TerminalConfiguration : IEntityTypeConfiguration<Entities.Terminal>
{
    public void Configure(EntityTypeBuilder<Entities.Terminal> builder)
    {
        builder.HasKey(c => c.Id);// Set the primary key
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.Property(c => c.Name)
            .IsRequired()
            .HasMaxLength(120);

        builder.Property(c => c.AirportId)
           .IsRequired();

        builder.ToTable("Terminal");
    }
}
