using FluentValidation;

namespace AirportManagement.Service.Queries;

public class GetairportByCodeQueryValidator : AbstractValidator<GetAirportByCodeQuery>
{
    public GetairportByCodeQueryValidator()
    {
        RuleFor(airport => airport.Code).NotNull().NotEmpty();
        RuleFor(airport => airport.Code).Length(3); 
    }
}
