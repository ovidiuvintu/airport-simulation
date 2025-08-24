using FluentValidation;

namespace AirportManagement.Service.Queries;

public class GetAllAirportsQueryQueryValidator : AbstractValidator<GetAllAirportsQuery>
{
    public GetAllAirportsQueryQueryValidator()
    {
    }
}
