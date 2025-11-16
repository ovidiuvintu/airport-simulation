using FluentValidation;

namespace AirportManagement.Service.Commands.Gate.Update;

public sealed class UpdateGateCommandValidator : AbstractValidator<UpdateGateCommand>
{
    public UpdateGateCommandValidator()
    {
        RuleFor(x => x.AirportId).NotEmpty().WithMessage("AirportId is required");
        RuleFor(x => x.GateId).NotEmpty().WithMessage("GateId is required");
        RuleFor(x => x.Gate).NotNull().WithMessage("Gate is required");
        RuleFor(x => x.Gate!.Name).NotEmpty().WithMessage("Gate name is required");
    }
}
