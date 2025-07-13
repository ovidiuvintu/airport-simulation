namespace Airport.Data;

public sealed class DepartingFlight
{
    public int Id { get; set; }

    public string? FlightNumber { get; set; }

    public string? Destination { get; set; }

    public DateTime ScheduledDepartureTime { get; set; }

    public DateTime ActualDepartureTime { get; set; }

}
