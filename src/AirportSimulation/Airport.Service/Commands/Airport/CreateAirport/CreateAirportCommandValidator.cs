using FluentValidation;

namespace Airport.Service.Commands.Airport.CreateAirport;

public sealed class CreateAirportCommandValidator : AbstractValidator<CreateAirportCommand>
{
    public CreateAirportCommandValidator()
    {
    }
}
