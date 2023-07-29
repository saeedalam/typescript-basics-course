import { User } from "./User"

export type Moment = {
    identifier: number,
    createdAt: Date,
    creator: User,
    caption: string,
    
}