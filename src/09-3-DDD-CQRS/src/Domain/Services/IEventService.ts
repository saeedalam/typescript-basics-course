
import { EventDto } from "../../Application/Dtos/Event.dto";
import { Event } from "../Entities/Event";

export default interface IEventService {
    create(event: EventDto): Promise<Event>;
    update(id: string, event: Event): Promise<Event>;
    get(identifier: string): Promise<Event>;
}