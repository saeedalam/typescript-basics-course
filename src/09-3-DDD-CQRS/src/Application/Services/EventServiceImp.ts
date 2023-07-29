import { Event } from "../../Domain/Entities/Event";
import IEventRepository from "../../Domain/Repositories/IEventRepository";
import IEventService from "../../Domain/Services/IEventService";
import { inject, injectable } from "inversify";
import { TYPES } from "../Config/types";
import { EventDto } from "../Dtos/Event.dto";
import { EventValidationException } from "../../Domain/Exception/EventValidationException";

@injectable()
export default class EventServiceImp implements IEventService {
    constructor(@inject(TYPES.EventRepository) private eventRepository: IEventRepository) { }


    public async create(event: EventDto): Promise<Event> {
        // ...
        // ...

        if (!event.title || event.status) {
            throw new EventValidationException('Title and date are required for event creation.');
        }
        return this.eventRepository.create(event)
    }

    public async update(id: string, event: Event): Promise<Event> {
        throw (new Error(""))
    }

    public async get(identifier: string): Promise<Event> {
        throw (new Error(""))
    }
}