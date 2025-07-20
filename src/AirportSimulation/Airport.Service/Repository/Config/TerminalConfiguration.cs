using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Airport.Service.Repository;

public partial class AirportContext
{
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

            builder.ToTable("Terminal");
        }
    }
}
