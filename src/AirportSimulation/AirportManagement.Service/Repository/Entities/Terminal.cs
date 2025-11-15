using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace AirportManagement.Service.Repository.Entities;

public class Terminal : BaseEntity
{
    [Required]
    public Guid AirportId { get; set; }
    [Required]
    public string Name { get; set; }
}
