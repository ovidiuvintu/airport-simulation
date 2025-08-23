using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.Repository.Entities;

//entities are table representations sql
public class Airport : BaseEntity
{
    [Required]
    public string? Name { get; set; }
    public string? Description { get; set; }
    [Required]
    public string? AirportCode { get; set; }
}
