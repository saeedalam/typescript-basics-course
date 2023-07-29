import { EventDto } from "../../Application/Dtos/Event.dto";
import { Event } from "../../Domain/Entities/Event";
import IEventRepository from "../../Domain/Repositories/IEventRepository";

export class EventFileRepository implements IEventRepository {
    create(order: EventDto): Promise<Event> {
        throw (new Error())
    }
    update(id: string, event: Event): Promise<Event> {
        throw (new Error())
    }
}