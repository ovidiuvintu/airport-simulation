using FluentValidation;

namespace AirportManagement.Service.Queries;

public class GetairportByNameQueryValidator : AbstractValidator<GetAirportByNameQuery>
{
    public GetairportByNameQueryValidator()
    {
        RuleFor(airport => airport.Name).NotNull().NotEmpty();
        RuleFor(airport => airport.Name).Length(3);
    }
}
