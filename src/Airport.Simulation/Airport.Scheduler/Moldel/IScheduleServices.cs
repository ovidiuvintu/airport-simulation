
using Airport.Scheduler.Data;
using Microsoft.Extensions.Options;

namespace Airport.Scheduler.Moldel;

public interface IScheduleServices
{
    public ScheduleDbContext DbContext { get; }

    public IOptions<ScheduleOptions> Options { get; }

    public ILogger<ScheduleServices> Logger { get; }
}