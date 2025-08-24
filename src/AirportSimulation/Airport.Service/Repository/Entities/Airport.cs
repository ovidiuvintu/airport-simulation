using Infrastructure;
using System.ComponentModel.DataAnnotations;

namespace Airport.Service.Repository.Entities;

public class Airport : BaseEntity
{
    [Required]
    [StringLength(255, MinimumLength = 5)]
    public string Name { get; set; }

    public string Description { get; set; }

    [Required]
    [StringLength(5, MinimumLength = 3)]
    public string AirportCode { get; set; }

    public IEnumerable<Terminal> Terminals { get; }

}
