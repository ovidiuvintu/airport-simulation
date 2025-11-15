using FluentValidation;
using Infrastructure.DTOs;

namespace AirportManagement.Service.Commands;

public sealed class CreateAirportCommandValidator : AbstractValidator<CreateAirportCommand>
{
    public CreateAirportCommandValidator()
    {
        RuleFor(cmd => cmd.Airport).NotNull();
        RuleFor(cmd => cmd.Airport.Name).NotNull().NotEmpty();
        RuleFor(cmd => cmd.Airport.AirportCode).Length(3);
        RuleFor(cmd => cmd.Airport.Description).MaximumLength(256);
        RuleForEach(cmd => cmd.Airport.Terminals).ChildRules(t =>
        {
            t.RuleFor(x => x.Name).NotEmpty();
        });
    }
}
