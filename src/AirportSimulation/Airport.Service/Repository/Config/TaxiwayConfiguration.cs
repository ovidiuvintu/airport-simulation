using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Airport.Service.Repository.Config;

internal sealed class TaxiwayConfiguration : IEntityTypeConfiguration<AirportManagement.Service.Repository.Entities.Taxiway>
{
    public void Configure(EntityTypeBuilder<AirportManagement.Service.Repository.Entities.Taxiway> builder)
    {
        builder.HasKey(c => c.Id); // Set the primary key
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.ToTable("Taxiway");
    }
}