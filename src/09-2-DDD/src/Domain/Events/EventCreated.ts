import { Event } from "../Entities/Event";

export class EventCreatedEvent {
    constructor(public event: Event) { }
}