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
    public IEnumerable<Terminal> Terminals { get; set; }

}
