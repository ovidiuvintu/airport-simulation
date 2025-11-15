using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace AirportManagement.Service.Repository.Entities;

public class Taxiway : BaseEntity
{
    public string Name { get; set; }
    // Airport relationship
    [Required]
    public Guid AirportId { get; set; }
    public Airport Airport { get; set; }
}