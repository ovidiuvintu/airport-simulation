using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.Repository.Entities;

public class Concourse : Entity
{
    [Required]
    public Guid TerminalId { get; set; }
    [Required]
    public required Terminal Terminal { get; set; } // Navigation property
    [Required]                                                
    public required string Name { get; set; } //concourse A (gates 1-20)
    [Required]
    public required IEnumerable<Gate> Gates { get; set; }
}
