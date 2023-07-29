// src/application/validation/userValidation.ts

export function createEventValidation(data: any): string[] | null {
    // Perform validation checks on the data received for creating a new user
    const errors: string[] = [];

    if (!data.name || typeof data.name !== 'string') {
        errors.push('Name is required and should be a string.');
    }

    if (!data.email || typeof data.email !== 'string') {
        errors.push('Email is required and should be a string.');
    }

    // Add more validation rules as needed

    return errors.length ? errors : null;
}
