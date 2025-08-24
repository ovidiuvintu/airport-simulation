using Infrastructure.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace Infrastructure;

public class BaseEntity : IEntity
{
    public BaseEntity()
    {
        Id = Guid.NewGuid();
    }

    [Key]
    public Guid Id { get; }

    public DateTime Created { get; set; }

    public DateTime Updated { get; set; }
}
