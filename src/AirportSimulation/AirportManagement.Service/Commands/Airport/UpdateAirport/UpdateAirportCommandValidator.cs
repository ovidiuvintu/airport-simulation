using FluentValidation;

namespace AirportManagement.Service.Commands;

public sealed class UpdateAirportCommandValidator : AbstractValidator<UpdateAirportCommand>
{
    public UpdateAirportCommandValidator()
    {
        RuleFor(airport => airport.Airport).NotNull();
        RuleFor(airport => airport.Airport.Name).NotNull().NotEmpty();
        RuleFor(airport => airport.Airport.AirportCode).Length(3);
        RuleFor(airport => airport.Airport.Description).MaximumLength(256);
    }
}

