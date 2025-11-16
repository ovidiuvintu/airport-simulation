using FluentValidation;

namespace AirportManagement.Service.Commands.Gate.Create;

public sealed class CreateGateCommandValidator : AbstractValidator<CreateGateCommand>
{
    public CreateGateCommandValidator()
    {
        RuleFor(x => x.AirportId).NotEmpty().WithMessage("AirportId is required");
        RuleFor(x => x.TerminalId).NotEmpty().WithMessage("TerminalId is required");
        RuleFor(x => x.Gate).NotNull().WithMessage("Gate is required");
        RuleFor(x => x.Gate!.Name).NotEmpty().WithMessage("Gate name is required");
    }
}
