import { Container } from 'inversify';
import { ExchangeService } from '../services/exchangeService';
import { ExchangeRepository } from '../repositories/exchangeRepository';
import { ExchangeController } from '../controllers/exchangeController';

import { TYPES } from './types';
import { AxiosHttpClient, HttpClient } from '../services/httpClient';

const container = new Container();

container.bind<ExchangeService>(TYPES.ExchangeService).to(ExchangeService).inSingletonScope();
container.bind<ExchangeRepository>(TYPES.ExchangeRepository).to(ExchangeRepository).inSingletonScope();
container.bind<HttpClient>(TYPES.HttpClient).to(AxiosHttpClient).inSingletonScope();


// Use a factory function for binding the controller
container.bind<ExchangeController>(TYPES.ExchangeController).toDynamicValue(() =>
    new ExchangeController(container.get<ExchangeService>(TYPES.ExchangeService)));

export { container };
