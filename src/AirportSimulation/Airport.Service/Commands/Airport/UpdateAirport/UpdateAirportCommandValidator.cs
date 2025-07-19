using FluentValidation;

namespace Airport.Service.Commands.Airport.UpdateAirport;

public sealed class UpdateAirportCommandValidator : AbstractValidator<UpdateAirportCommand>
{
    public UpdateAirportCommandValidator()
    {        
    }
}

