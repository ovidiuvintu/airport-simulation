using System.ComponentModel.DataAnnotations;

namespace Airport.Scheduler.Data;

public class Carrier
{
    public int Id { get; set; }

    [Required]
    public string? Name { get; set; }

    public string? Description { get; set; }

    [Required]
    public string? CarrierCode { get; set; }
}
