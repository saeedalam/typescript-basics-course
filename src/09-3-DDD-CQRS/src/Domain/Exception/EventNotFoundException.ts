import { BaseException } from "./BaseEsxption";

export class EventNotFoundException extends BaseException {
    constructor(eventId: string) {
        super(`Event with ID '${eventId}' not found.`, 404);
    }
}