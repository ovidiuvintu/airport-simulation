using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.Repository.Entities;

public class Terminal : BaseEntity
{
    [Required]
    public Guid AirportId { get; set; }
    [Required]
    public Airport Airport { get; set; }
    [Required]
    public required string Name { get; set; }
}
