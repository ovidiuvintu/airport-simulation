using FluentValidation;

namespace AirportManagement.Service.Commands;

public sealed class DeleteAirportCommandValidator : AbstractValidator<DeleteAirportCommand>
{
    public DeleteAirportCommandValidator()
    {
        RuleFor(x => x.AirportId).NotEmpty().WithMessage("AirportId must be provided");
    }
}
