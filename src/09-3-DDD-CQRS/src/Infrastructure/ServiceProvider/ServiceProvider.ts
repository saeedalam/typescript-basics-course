import { Container } from 'inversify';
// import { AxiosHttpClient, HttpClient } from '../services/httpClient';
import { EventController } from '../../Application/Controllers/EventController';
import { TYPES } from '../../Application/Config/types';
import { CreateEventHandler } from '../../CQRS/Handlers/CreateEventHandler';
import { GetEventHandler } from '../../CQRS/Handlers/GetEventHandler';
import IEventService from '../../Domain/Services/IEventService';
import IEventRepository from '../../Domain/Repositories/IEventRepository';
import EventServiceImp from '../../Application/Services/EventServiceImp';
import { TypeOrmEventRepository } from '../Repositories/EventTypeOrmRepository';

export class ServiceProvider {
    private container: Container;

    constructor() {
        this.container = new Container();
        this.register();
    }

    public register(): void {
        this.container
            .bind<CreateEventHandler>(TYPES.CreateEventHandler)
            .to(CreateEventHandler)
            .inSingletonScope();
        this.container
            .bind<GetEventHandler>(TYPES.GetEventHandler)
            .to(GetEventHandler)
            .inSingletonScope();

        this.container
            .bind<IEventService>(TYPES.EventService)
            .to(EventServiceImp)
            .inSingletonScope();

        this.container
            .bind<IEventRepository>(TYPES.EventRepository)
            .to(TypeOrmEventRepository)
            .inSingletonScope();



        // Bind the EventController to its interface
        this.container.bind<EventController>(TYPES.EventController).to(EventController).inSingletonScope();
    }

    public getContainer(): Container {
        return this.container;
    }
}
