using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Airport.Service.Repository;

public partial class AirportContext
{
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
}
