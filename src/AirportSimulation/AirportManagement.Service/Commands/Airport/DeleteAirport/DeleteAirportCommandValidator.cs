using FluentValidation;

namespace AirportManagement.Service.Commands;

public sealed class DeleteAirportCommandValidator : AbstractValidator<DeleteAirportCommand>
{
    public DeleteAirportCommandValidator()
    {
        
    }
}
