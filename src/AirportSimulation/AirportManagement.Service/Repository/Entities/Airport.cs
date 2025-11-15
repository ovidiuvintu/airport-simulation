using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace AirportManagement.Service.Repository.Entities;

public class Airport : BaseEntity
{
    [Required]
    [StringLength(255, MinimumLength = 5)]
    public string Name { get; set; }

    public string Description { get; set; }

    [Required]
    [StringLength(5, MinimumLength = 3)]
    public string AirportCode { get; set; }

    [Required]
    public ICollection<Terminal> Terminals { get; set; } = new List<Terminal>();

    // Navigation collections
    public ICollection<Gate> Gates { get; set; } = new List<Gate>();
    public ICollection<Runway> Runways { get; set; } = new List<Runway>();
    public ICollection<Taxiway> Taxiways { get; set; } = new List<Taxiway>();

    [Timestamp]
    public byte[] Timestamp { get; set; }
}
