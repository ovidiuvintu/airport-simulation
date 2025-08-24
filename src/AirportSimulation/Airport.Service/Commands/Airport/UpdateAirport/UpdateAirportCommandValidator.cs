using FluentValidation;

namespace AirportManagement.Service.Commands;

public sealed class UpdateAirportCommandValidator : AbstractValidator<UpdateAirportCommand>
{
    public UpdateAirportCommandValidator()
    {        
    }
}

