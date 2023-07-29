import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { TYPES } from '../Config/types';
import IEventService from '../../Domain/Services/IEventService';
import { EventDto } from '../Dtos/Event.dto';
import { createEventValidation } from '../Validation/EventValidations';

@controller('/api')
export class EventController {
    constructor(@inject(TYPES.EventService) private eventService: IEventService) { }

    @httpGet('/event')
    async post(req: Request, res: Response) {

        const errors = createEventValidation(req.body);
        if (errors) {
            return res.status(400).json({ errors });
        }

        try {
            console.log("Hi!", JSON.stringify(req.body))
            const event = req.body as EventDto;
            const result = await this.eventService.create(event);

            console.log(`Request : ${JSON.stringify(event)}`)
            console.log(`Result : ${JSON.stringify(result)}`)

            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error: (error as Error).message || 'Invalid request' });
        }
    }

    @httpPost('/event')
    async get(req: Request, res: Response) {
        try {
            const identifier = "1";
            const result = await this.eventService.get(identifier);

            console.log(`Request : ${JSON.stringify(identifier)}`)
            console.log(`Result : ${JSON.stringify(result)}`)

            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error: (error as Error).message || 'Invalid request' });
        }
    }

}