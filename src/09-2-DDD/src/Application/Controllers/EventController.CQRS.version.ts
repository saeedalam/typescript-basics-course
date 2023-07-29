import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { CreateEventHandler } from '../../CQRS/Handlers/CreateEventHandler';
import { GetEventHandler } from '../../CQRS/Handlers/GetEventHandler';
import { CreateEventCommand } from '../../CQRS/Commands/CreateEventCommand';
import { GetEventQuery } from '../../CQRS/Queries/GetEventQuery';

@injectable()
export class EventController {
    constructor(
        @inject('CreateEventHandler') private createEventHandler: CreateEventHandler,
        @inject('GetEventHandler') private getEventHandler: GetEventHandler
    ) { }

    async createEvent(req: Request, res: Response): Promise<void> {
        try {
            const { title, date } = req.body;
            const command = new CreateEventCommand(title, date);
            await this.createEventHandler.handle(command);
            res.status(201).json({ message: 'Event created successfully.' });
        } catch (err) {
            res.status(500).json({ error: 'Failed to create event.' });
        }
    }

    async getEvent(req: Request, res: Response): Promise<void> {
        try {
            const { eventId } = req.params;
            const query = new GetEventQuery(eventId);
            const event = await this.getEventHandler.handle(query);
            if (event) {
                res.status(200).json(event);
            } else {
                res.status(404).json({ message: 'Event not found.' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch event.' });
        }
    }
}
