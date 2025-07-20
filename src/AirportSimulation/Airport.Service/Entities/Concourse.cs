using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.Entities;

public class Concourse : Entity
{
    [Required]
    public Guid TerminalId { get; set; }
    [Required]
    public required Terminal Terminal { get; set; } // Navigation property
    [Required]                                                //concourse A (gates 1-20)
    public required string Name { get; set; }
    [Required]
    public required IEnumerable<Gate> Gates { get; set; }
}
