using Airport.Data;
using Microsoft.Extensions.Options;

namespace Airport.Scheduler.Moldel;

public class ScheduleServices(ScheduleDbContext dbContext,
                              IOptions<ScheduleOptions> options,
                              ILogger<ScheduleServices> logger) : IScheduleServices
{
    
    public ScheduleDbContext DbContext { get; } = dbContext;

    public IOptions<ScheduleOptions> Options { get; } = options;

    public ILogger<ScheduleServices> Logger { get; } = logger;
}
