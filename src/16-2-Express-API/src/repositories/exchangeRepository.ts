import { injectable, inject } from 'inversify';
import { API_URL, EXCHANGE_RATE_API_KEY } from '../config/config';
import { HttpClient } from '../services/httpClient';
import { TYPES } from '../config/types';

interface PairExchangeRateResponse {
    conversion_rate: number;
}

interface AllExchangeRateApiResponse {
    result: string;
    documentation: string;
    terms_of_use: string;
    time_last_update_unix: number;
    time_last_update_utc: string;
    time_next_update_unix: number;
    time_next_update_utc: string;
    base_code: string;
    conversion_rates: { [currency: string]: number };
}


@injectable()
export class ExchangeRepository {
    constructor(@inject(TYPES.HttpClient) private httpClient: HttpClient) { }

    async fetchExchangeRate(baseCurrency: string, targetCurrency: string): Promise<number> {
        try {
            const url = `${API_URL}/${EXCHANGE_RATE_API_KEY}/pair/${baseCurrency}/${targetCurrency}`;
            const response: PairExchangeRateResponse = await this.httpClient.get<PairExchangeRateResponse>(url);
            return response.conversion_rate;
        } catch (error) {
            throw new Error('Failed to fetch exchange rate from the API');
        }
    }

    async fetchAllRates(targetCurrency: string): Promise<{ [currency: string]: number }> {
        try {
            const url = `${API_URL}/${EXCHANGE_RATE_API_KEY}/latest/${targetCurrency}`;
            const response: AllExchangeRateApiResponse = await this.httpClient.get<AllExchangeRateApiResponse>(url);
            return response.conversion_rates;
        } catch (error) {
            throw new Error('Failed to fetch exchange rate from the API');
        }
    }
}
