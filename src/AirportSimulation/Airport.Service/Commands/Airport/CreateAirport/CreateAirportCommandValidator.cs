using FluentValidation;

namespace AirportManagement.Service.Commands;

public sealed class CreateAirportCommandValidator : AbstractValidator<CreateAirportCommand>
{
    public CreateAirportCommandValidator()
    {
        RuleFor(airport => airport.Airport).NotNull();
        RuleFor(airport => airport.Airport.Name).NotNull().NotEmpty();
        RuleFor(airport => airport.Airport.AirportCode).Length(3);
        RuleFor(airport => airport.Airport.Description).MaximumLength(256);
    }
}
