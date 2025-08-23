using Infrastructure.Interfaces;

namespace Airport.Service.Services
{
    public class AirportService : IAirportService
    {
        private readonly IRepository<Repository.Entities.Airport> _repo;

        public AirportService(IRepository<Repository.Entities.Airport> repo)
        {
            _repo = repo;
        }
    }
}
