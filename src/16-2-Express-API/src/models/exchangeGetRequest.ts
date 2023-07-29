import { IsNumber, IsString, Validate, validate } from 'class-validator';
import { Request } from 'express';
import { CurrencyCode } from './currencies';

export class ExchangeGetRequest {
    @IsNumber()
    value!: number;

    @IsString()
    currency!: CurrencyCode;

    @IsString()
    targetCurrency!: CurrencyCode;
}



export async function validateExchangeGetRequest(req: Request): Promise<ExchangeGetRequest> {
    const { value, currency, targetCurrency } = req.query;

    const exchangeRequest = new ExchangeGetRequest();
    exchangeRequest.value = parseFloat(value as string);
    exchangeRequest.currency = currency as CurrencyCode;
    exchangeRequest.targetCurrency = targetCurrency as CurrencyCode;

    const errors = await validate(exchangeRequest);
    if (errors.length > 0) {
        throw new Error('Invalid query parameters.');
    }

    return exchangeRequest;
}
