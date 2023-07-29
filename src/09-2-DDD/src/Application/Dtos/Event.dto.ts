import { Event } from "../../Domain/Entities/Event";

export type EventDto = Omit<Event, "identifier" | "moments" | "participants">