using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Airport.Service.Repository.Config;

internal sealed class GateConfiguration : IEntityTypeConfiguration<Entities.Gate>
{
    public void Configure(EntityTypeBuilder<Entities.Gate> builder)
    {
        builder.HasKey(c => c.Id); // Set the primary key

        builder.Property(c => c.Name)
            .IsRequired()
            .HasMaxLength(120);

        builder.HasOne(p => p.Concourse) // A gate has one Concourse
               .WithMany(c => c.Gates) // A Concourse has many gates
               .HasForeignKey(p => p.ConcourseId); // Specify ConcourseId as the foreign key

        builder.ToTable("Gate");
    }
}
