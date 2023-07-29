import { Container } from 'inversify';
// import { AxiosHttpClient, HttpClient } from '../services/httpClient';
import { TypeOrmEventRepository } from '../Repositories/EventTypeOrmRepository';
import { EventController } from '../../Application/Controllers/EventController';
import EventServiceImp from '../../Application/Services/EventServiceImp';
import IEventService from '../../Domain/Services/IEventService';
import IEventRepository from '../../Domain/Repositories/IEventRepository';
import { TYPES } from '../../Application/Config/types';

export class ServiceProvider {
    private container: Container;

    constructor() {
        this.container = new Container();
        this.register();
    }

    public register(): void {
        this.registerController();
        this.registerServices()
    }

    // Bind interfaces to concrete implementations

    public registerServices(): void {
        this.container.bind<IEventService>(TYPES.EventService).to(EventServiceImp).inSingletonScope();
        this.container.bind<IEventRepository>(TYPES.EventRepository).to(TypeOrmEventRepository).inSingletonScope();
        // this.container.bind<HttpClient>(TYPES.HttpClient).to(AxiosHttpClient).inSingletonScope();
    }

    public registerController(): void {
        // Use a factory function for binding the controller
        this.container.bind<EventController>(TYPES.EventController).toDynamicValue(() =>
            new EventController(this.container.get<EventServiceImp>(TYPES.EventService))
        );
    }

    public getContainer(): Container {
        return this.container;
    }
}
