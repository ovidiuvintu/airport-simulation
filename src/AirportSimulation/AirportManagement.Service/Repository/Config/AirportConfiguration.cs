using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Airport.Service.Repository.Config;

internal sealed class AirportConfiguration : IEntityTypeConfiguration<AirportManagement.Service.Repository.Entities.Airport>
{
    public void Configure(EntityTypeBuilder<AirportManagement.Service.Repository.Entities.Airport> builder)
    {
        builder.HasKey(c => c.Id); // Set the primary key
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.Property(c => c.AirportCode)
            .IsRequired()
            .HasMaxLength(3);

        builder.Property(c => c.Name)
            .IsRequired()
            .HasMaxLength(120);

        builder.Property(c => c.Description)
            .HasMaxLength(255);

         builder.HasMany(c => c.Terminals)
             .WithOne()
             .HasForeignKey("AirportId");

        builder.ToTable("Airport");
    }
}
