import { injectable } from "inversify";
import { EventDto } from "../../Application/Dtos/Event.dto";
import { Event } from "../../Domain/Entities/Event";
import IEventRepository from "../../Domain/Repositories/IEventRepository";

@injectable()
export class TypeOrmEventRepository implements IEventRepository {
    async create(event: EventDto): Promise<Event> {
        // const connection = await this.getConnection();
        // await connection
        //     .getRepository(TypeOrmEvent)
        //     .save(this.convertToTypeOrmEvent(event));
        throw (new Error())
    }
    update(id: string, event: Event): Promise<Event> {
        throw (new Error())
    }

    // private getConnection(): Promise<Connection> {
    //     return this.databaseProvider.initialize();
    // }
}
