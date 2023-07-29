import { CreateEventCommand } from "../Commands/CreateEventCommand";

export function createEventValidation(command: CreateEventCommand): string[] | null {
    // Perform validation checks on the CreateEventCommand
    const errors: string[] = [];

    if (!command.title || typeof command.title !== 'string') {
        errors.push('Name is required and should be a string.');
    }

    // Add more validation rules as needed

    return errors.length ? errors : null;
}
