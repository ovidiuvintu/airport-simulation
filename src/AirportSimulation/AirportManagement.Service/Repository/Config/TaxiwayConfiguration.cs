using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Airport.Service.Repository.Config;

internal sealed class TaxiwayConfiguration : IEntityTypeConfiguration<AirportManagement.Service.Repository.Entities.Taxiway>
{
    public void Configure(EntityTypeBuilder<AirportManagement.Service.Repository.Entities.Taxiway> builder)
    {
        builder.HasKey(c => c.Id); // Set the primary key
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.Property(c => c.AirportId)
            .IsRequired();

         builder.HasOne(t => t.Airport)
             .WithMany(a => a.Taxiways)
             .HasForeignKey(t => t.AirportId);

        builder.ToTable("Taxiway");
    }
}