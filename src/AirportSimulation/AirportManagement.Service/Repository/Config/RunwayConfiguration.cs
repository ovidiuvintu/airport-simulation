using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Airport.Service.Repository.Config;

internal sealed class RunwayConfiguration : IEntityTypeConfiguration<AirportManagement.Service.Repository.Entities.Runway>
{
    public void Configure(EntityTypeBuilder<AirportManagement.Service.Repository.Entities.Runway> builder)
    {
        builder.HasKey(c => c.Id); // Set the primary key
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.ToTable("Runway");
    }
}