using System.ComponentModel.DataAnnotations;

namespace Airport.Scheduler.Data;

public sealed class Carrier
{
    public int Id { get; set; }

    [Required]
    public string? CarrierName { get; set; }

    public string? CarrierDescription { get; set; }

    [Required]
    public string? CarrierCode { get; set; }
}
