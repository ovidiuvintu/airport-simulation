using FluentValidation;

namespace AirportManagement.Service.Commands.Gate.Delete;

public sealed class DeleteGateCommandValidator : AbstractValidator<DeleteGateCommand>
{
    public DeleteGateCommandValidator()
    {
        RuleFor(x => x.AirportId).NotEmpty().WithMessage("AirportId is required");
        RuleFor(x => x.GateId).NotEmpty().WithMessage("GateId is required");
    }
}
