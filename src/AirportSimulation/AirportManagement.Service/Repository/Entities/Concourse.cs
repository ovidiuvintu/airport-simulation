using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace AirportManagement.Service.Repository.Entities;

public class Concourse : BaseEntity
{
    [Required]
    public Guid TerminalId { get; set; }
    [Required]                                                
    public required string Name { get; set; } //concourse A (gates 1-20)
}
