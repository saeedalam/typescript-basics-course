import { Address } from "cluster";
import { User } from "./User";
import { Moment } from "./Moment";
import { EventType } from "../Enums/EventType";
import { EventPaymentType } from "../Enums/EventPaymentType";
import { EventRepeatType } from "../Enums/EventRepeatType";
import { Entity } from "./Entity";
import { EventStatus } from "../Enums/EventStatus";

export type Event = Entity & {
    title: string,
    description: string,
    createdAt: Date,
    status: EventStatus,
    participants: User[],
    moments: Moment[],
    Address: Address,
    eventType: EventType,
    paymentType: EventPaymentType,
    repeat: EventRepeatType
}