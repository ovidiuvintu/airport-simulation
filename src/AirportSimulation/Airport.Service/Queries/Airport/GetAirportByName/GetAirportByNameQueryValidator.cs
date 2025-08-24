using FluentValidation;

namespace Airport.Service.Queries.Airport.GetAirportByCode;

public class GetairportByNameQueryValidator : AbstractValidator<GetAirportByNameQuery>
{
    public GetairportByNameQueryValidator()
    {
        RuleFor(airport => airport.Name).NotNull().NotEmpty();
        RuleFor(airport => airport.Name).MinimumLength(1).MaximumLength(80).NotEmpty();
    }
}
