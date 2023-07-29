import { ExchangeSumRequestWithValues } from '../../src/models/exchangeSumRequest';
import data from './data'

export class ExchangeRepository {

  fetchExchangeRate(currency: string, targetCurrency: string): Promise<number> {
    const exchangeRate = data.conversion_rates[targetCurrency] / data.conversion_rates[currency];
    if (isNaN(exchangeRate)) {
      return Promise.reject(new Error(`Invalid currency or target currency: ${currency}, ${targetCurrency}`));
    }
    return Promise.resolve(exchangeRate);
  }

  fetchAllRates(targetCurrency: string): Promise<{ [key: string]: number }> {
    return Promise.resolve(data.conversion_rates);
  }

  sumValues(request: ExchangeSumRequestWithValues): Promise<number> {
    // Calculate the total sum in the requested currency
    const allExchangeRates = data.conversion_rates;
    const totalSum = request.values.reduce((acc, item) =>
      acc + item.value / allExchangeRates[item.currency]
      , 0);

    return Promise.resolve(Number(totalSum.toFixed(2)));
  }
}

