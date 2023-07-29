
import { injectable, inject } from 'inversify';
import { GetEventQuery } from '../Queries/GetEventQuery';
import IEventService from '../../Domain/Services/IEventService';
import { getEventValidation } from '../Validations/GetEventValidation';

@injectable()
export class GetEventHandler {
    constructor(@inject('EventService') private eventService: IEventService) { }

    async handle(query: GetEventQuery): Promise<Event> {

        const errors = getEventValidation(query);
        if (errors) {
            throw new Error(errors.join('\n'));
        }

        // Implement the logic to fetch an event using the EventService
        //return await this.eventService.get(query.eventId);
        throw (new Error(""))
    }
}
