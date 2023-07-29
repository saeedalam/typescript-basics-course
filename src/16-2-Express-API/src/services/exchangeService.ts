import { injectable, inject } from 'inversify';
import { ExchangeGetRequest } from '../models/exchangeGetRequest';
import { ExchangeResponse } from '../models/exchangeResponse';
import { TYPES } from '../config/types';
import { ExchangePostRequest, ExchangeValue } from '../models/exchangePostRequest';
import { ExchangeRepository } from '../repositories/exchangeRepository';
import { ExchangeSumRequestWithValues, ExchangeSumResponse } from '../models/exchangeSumRequest';


@injectable()
export class ExchangeService {
    constructor(@inject(TYPES.ExchangeRepository) private exchangeRepository: ExchangeRepository) { }

    async getExchange(request: ExchangeGetRequest): Promise<ExchangeResponse> {
        try {
            const exchangeRate = await this.exchangeRepository.fetchExchangeRate(request.currency, request.targetCurrency);

            const exchangedValue = request.value * exchangeRate;
            return { value: exchangedValue.toFixed(2), currency: request.targetCurrency };
        } catch (error) {
            throw new Error('Failed to fetch exchange rate');
        }
    }

    async postExchange(request: ExchangePostRequest): Promise<string> {
        try {
            const allExchangeRates = await this.exchangeRepository.fetchAllRates(request.targetCurrency);
            const exchanged: ExchangeValue[] = request.values.map(item => {
                const value = item.amount / allExchangeRates[item.currency];
                return { amount: value, currency: item.currency } as ExchangeValue
            })
            return exchanged.map(item => `${item.amount.toFixed(2)} ${request.targetCurrency}`).join(';')
        } catch (error) {
            throw new Error('Failed to fetch exchange rate');
        }
    }

    async sumValues(request: ExchangeSumRequestWithValues): Promise<ExchangeSumResponse> {
        try {
            const allExchangeRates = await this.exchangeRepository.fetchAllRates(request.targetCurrency);
            // Calculate the total sum in the requested currency
            const totalSum = request.values.reduce((acc, item) =>
                acc + item.value / allExchangeRates[item.currency]
                , 0);

            // Create the response object with the sum result
            const result: ExchangeSumResponse = {
                value: totalSum.toFixed(2),
                currency: request.targetCurrency,
            };

            return result;
        } catch (error) {
            throw new Error('Failed to fetch exchange rate');
        }
    }

}
