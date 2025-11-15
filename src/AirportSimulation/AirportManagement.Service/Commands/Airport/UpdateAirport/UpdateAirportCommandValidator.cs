using FluentValidation;
using Infrastructure.DTOs;

namespace AirportManagement.Service.Commands;

public sealed class UpdateAirportCommandValidator : AbstractValidator<UpdateAirportCommand>
{
    public UpdateAirportCommandValidator()
    {
        RuleFor(cmd => cmd.Airport).NotNull();
        RuleFor(cmd => cmd.Airport.Name).NotNull().NotEmpty();
        RuleFor(cmd => cmd.Airport.AirportCode).Length(3);
        RuleFor(cmd => cmd.Airport.Description).MaximumLength(256);
    }
}

