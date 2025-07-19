using FluentValidation;

namespace Airport.Service.Commands.Airport.DeleteAirport;

public sealed class DeleteAirportCommandValidator : AbstractValidator<DeleteAirportCommand>
{
    public DeleteAirportCommandValidator()
    {
        
    }
}
