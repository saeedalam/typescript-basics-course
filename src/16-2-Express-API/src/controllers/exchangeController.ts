import { Request, Response } from 'express';
import { inject } from 'inversify';
import { ExchangeService } from '../services/exchangeService';
import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { TYPES } from '../config/types';
import { validateExchangeGetRequest } from '../models/exchangeGetRequest';
import { validateExchangePostRequest } from '../models/exchangePostRequest';
import { validateExchangeSumRequest } from '../models/exchangeSumRequest';

@controller('/api')
export class ExchangeController {
    constructor(@inject(TYPES.ExchangeService) private exchangeService: ExchangeService) { }

    @httpGet('/exchange')
    async getExchange(req: Request, res: Response) {
        try {
            const exchangeRequest = await validateExchangeGetRequest(req);
            const result = await this.exchangeService.getExchange(exchangeRequest);

            console.log(`Request : ${JSON.stringify(exchangeRequest)}`)
            console.log(`Result : ${JSON.stringify(result)}`)

            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error: (error as Error).message || 'Invalid request' });
        }
    }

    @httpPost('/exchange')
    async postExchange(req: Request, res: Response) {
        try {
            const exchangeRequest = await validateExchangePostRequest(req);
            const result = await this.exchangeService.postExchange(exchangeRequest);

            console.log(`Request : ${JSON.stringify(exchangeRequest)}`)
            console.log(`Result : ${JSON.stringify(result)}`)

            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error: (error as Error).message || 'Invalid request' });
        }
    }

    @httpPost('/sum')
    async sumValues(req: Request, res: Response) {
        try {
            const exchangeRequest = await validateExchangeSumRequest(req);
            const result = await this.exchangeService.sumValues(exchangeRequest);

            console.log(`Request : ${JSON.stringify(exchangeRequest)}`)
            console.log(`Result : ${JSON.stringify(result)}`)

            res.status(200).json({ result });
        } catch (error) {
            res.status(400).json({ error: (error as Error).message || 'Invalid request' });
        }
    }
}