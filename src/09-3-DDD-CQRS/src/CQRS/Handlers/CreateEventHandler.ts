import { injectable, inject } from 'inversify';
import { CreateEventCommand } from '../Commands/CreateEventCommand';
import IEventService from '../../Domain/Services/IEventService';
import { EventDto } from '../../Application/Dtos/Event.dto';
import { createEventValidation } from '../Validations/CreateEventValidation';
import { TYPES } from '../../Application/Config/types';

@injectable()
export class CreateEventHandler {
    constructor(@inject(TYPES.EventService) private eventService: IEventService) { }

    async handle(command: CreateEventCommand): Promise<void> {

        const errors = createEventValidation(command);
        if (errors) {
            throw new Error(errors.join('\n'));
        }

        // Implement the logic to create an event using the EventService
        await this.eventService.create({
            title: command.title,
            //date: command.date,
        } as EventDto);
    }
}
