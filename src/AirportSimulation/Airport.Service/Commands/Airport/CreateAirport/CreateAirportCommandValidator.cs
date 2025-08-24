using FluentValidation;

namespace Airport.Service.Commands.Airport.CreateAirport;

public sealed class CreateAirportCommandValidator : AbstractValidator<CreateAirportCommand>
{
    public CreateAirportCommandValidator()
    {
        RuleFor(airport => airport.AirportCode).NotNull().NotEmpty();
        RuleFor(airport => airport.AirportCode).Length(3);
        RuleFor(airport => airport.Description).MaximumLength(256);
    }
}
