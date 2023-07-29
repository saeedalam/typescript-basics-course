import { GetEventQuery } from "../Queries/GetEventQuery";

export function getEventValidation(query: GetEventQuery): string[] | null {
    // Perform validation checks on the GetEventQuery
    const errors: string[] = [];

    if (!query.eventId || typeof query.eventId !== 'string') {
        errors.push('Event ID is required and should be a string.');
    }

    // Add more validation rules as needed

    return errors.length ? errors : null;
}
