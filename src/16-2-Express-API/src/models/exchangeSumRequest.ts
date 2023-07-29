import { IsNotEmpty, IsString, validate } from 'class-validator';
import { CurrencyCode } from './currencies';
import { Transform, TransformFnParams, Type } from 'class-transformer';
import { Request } from 'express';

export interface ExchangeSumRequestWithValues {
    values: {
        value: number;
        currency: CurrencyCode;
    }[];
    targetCurrency: CurrencyCode;
}

export class ExchangeSumRequest {
    @IsNotEmpty()
    @Transform(({ value }: TransformFnParams) => {
        if (!Array.isArray(value)) {
            throw new Error('Invalid values. It should be an array.');
        }
        return value;
    })

    values!: ExchangeSumRequestWithValues[];

    @IsNotEmpty()
    @IsString()
    targetCurrency!: CurrencyCode;
}

export interface ExchangeSumResponse {
    value: string,
    currency: CurrencyCode
}


export async function validateExchangeSumRequest(req: Request): Promise<ExchangeSumRequestWithValues> {
    const { values, targetCurrency } = req.body;

    const exchangeSumRequest: ExchangeSumRequestWithValues = {
        values,
        targetCurrency,
    };

    // Validate the exchangeSumRequest object
    const errors = await validate(exchangeSumRequest);
    if (errors.length > 0) {
        const errorMessages = errors.map((error) => Object.values(error.constraints || {})).flat();
        throw new Error(`Invalid query parameters. ${errorMessages.join(' ')}`);
    }

    return exchangeSumRequest;
}