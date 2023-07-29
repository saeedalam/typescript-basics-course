import { EventDto } from "../../Application/Dtos/Event.dto";
import { Event } from "../Entities/Event";


export default interface IEventRepository {
    create(order: EventDto): Promise<Event>;
    update(id: string, event: Event): Promise<Event>;
}