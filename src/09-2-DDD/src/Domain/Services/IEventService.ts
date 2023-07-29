
import { EventDto } from "../../Application/Dtos/Event.dto";
import { Event } from "../Entities/Event";
import IEventRepository from "../Repositories/IEventRepository";

export default interface IEventService {
    create(event: EventDto): Promise<Event>;
    update(id: string, event: Event): Promise<Event>;
    get(identifier: string): Promise<Event>;
}