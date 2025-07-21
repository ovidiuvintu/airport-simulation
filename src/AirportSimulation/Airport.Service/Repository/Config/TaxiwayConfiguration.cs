using Airport.Service.Repository.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Airport.Service.Repository.Config;

internal sealed class TaxiwayConfiguration : IEntityTypeConfiguration<Taxiway>
{
    public void Configure(EntityTypeBuilder<Taxiway> builder)
    {
        builder.HasKey(c => c.Id); // Set the primary key
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.ToTable("Taxiway");
    }
}