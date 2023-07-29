import { IsNotEmpty, IsString, validate } from 'class-validator';
import { CurrencyCode } from './currencies';
import { Request } from 'express';
import { Type, Transform, TransformFnParams } from 'class-transformer';

export class ExchangeValue {
    @IsNotEmpty()
    amount!: number;

    @IsNotEmpty()
    @IsString()
    currency!: CurrencyCode;
}

export class ExchangePostRequest {
    @IsNotEmpty()
    @Transform(({ value }: TransformFnParams) => {
        if (typeof value === 'string') {
            return value
                .split(';')
                .map((item) => {
                    const [amount, currency] = item.trim().split(' ');
                    return { amount: parseFloat(amount), currency: currency as CurrencyCode };
                });
        } else {
            return value;
        }
    })
    @Type(() => ExchangeValue)
    values!: ExchangeValue[];

    @IsNotEmpty()
    @IsString()
    targetCurrency!: CurrencyCode;
}

export interface ExchangeRequestWithValues {
    values: {
        amount: number;
        currency: CurrencyCode;
    }[];
    targetCurrency: CurrencyCode;
}

export async function validateExchangePostRequest(req: Request): Promise<ExchangeRequestWithValues> {
    const { values, targetCurrency } = req.body;

    // Check if values is a string and needs to be extracted
    let extractedValues: string | ExchangeValue[] = values;
    if (typeof values === 'string') {
        extractedValues = values
            .split(';')
            .map((item) => {
                const [amount, currency] = item.trim().split(' ');

                return { amount: parseFloat(amount), currency: currency as CurrencyCode };
            });
    }

    const exchangeRequest: ExchangeRequestWithValues = {
        values: extractedValues as ExchangeValue[],
        targetCurrency: targetCurrency as CurrencyCode,
    };

    const errors = await validate(exchangeRequest);
    if (errors.length > 0) {
        throw new Error('Invalid query parameters.');
    }

    return exchangeRequest;
}
