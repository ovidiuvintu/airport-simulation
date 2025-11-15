using FluentValidation;

namespace AirportManagement.Service.Commands;

public sealed class AddAirportTerminalCommandValidator : AbstractValidator<AddAirportTerminalCommand>
{
    public AddAirportTerminalCommandValidator()
    {
        RuleFor(x => x.AirportId).NotEmpty().WithMessage("AirportId is required");
        RuleFor(x => x.Terminal).NotNull().WithMessage("Terminal is required");
        RuleFor(x => x.Terminal!.Name).NotEmpty().MinimumLength(1).WithMessage("Terminal name is required");
    }
}
