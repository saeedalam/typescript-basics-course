import { ExchangeService } from '../../src/services/exchangeService';
import { ExchangeGetRequest } from '../../src/models/exchangeGetRequest';
import { ExchangePostRequest } from '../../src/models/exchangePostRequest';
import { ExchangeRepository } from '../../src/repositories/exchangeRepository';
import { ExchangeResponse } from '../../src/models/exchangeResponse';
import data from '../__mocks__/data';
import { HttpClient } from '../../src/services/httpClient';
import { ExchangeSumRequest, ExchangeSumRequestWithValues, ExchangeSumResponse } from '../../src/models/exchangeSumRequest';

// Mock the ExchangeRepository
jest.mock('../../src/repositories/exchangeRepository');

// Helper function to create a mock instance of HttpClient
function createMockHttpClient(): HttpClient {
    return {
        get: jest.fn(),
        post: jest.fn(),
    };
}

function createMockExchangeRepository(httpClient: HttpClient): ExchangeRepository {
    const mockExchangeRepository = new ExchangeRepository(httpClient);

    // Set up the mock implementation for fetchExchangeRate
    jest.spyOn(mockExchangeRepository, 'fetchExchangeRate').mockImplementation(
        (currency: string, targetCurrency: string) => {
            const exchangeRate = data.conversion_rates[targetCurrency] / data.conversion_rates[currency];
            if (isNaN(exchangeRate)) {
                return Promise.reject(new Error(`Invalid currency or target currency: ${currency}, ${targetCurrency}`));
            }
            return Promise.resolve(exchangeRate);
        }
    );

    // Set up the mock implementation for fetchAllRates
    jest.spyOn(mockExchangeRepository, 'fetchAllRates').mockResolvedValue(data.conversion_rates);

    return mockExchangeRepository;
}


describe('ExchangeService', () => {
    let exchangeService: ExchangeService;
    let mockExchangeRepository: ExchangeRepository;
    let mockHttpClient: HttpClient;
    beforeEach(() => {
        // Create a new mock HttpClient instance for each test
        mockHttpClient = createMockHttpClient();
        // Pass the mock HttpClient instance to createMockExchangeRepository
        mockExchangeRepository = createMockExchangeRepository(mockHttpClient);
        exchangeService = new ExchangeService(mockExchangeRepository);
    });

    describe('getExchange', () => {
        it('should calculate exchanged value correctly', async () => {
            // Arrange
            const request: ExchangeGetRequest = { currency: 'USD', targetCurrency: 'EUR', value: 10 };

            // Act
            const result: ExchangeResponse = await exchangeService.getExchange(request);

            // Assert
            expect(result.value).toBe('8.99');
            expect(result.currency).toBe('EUR');
        });

        it('should handle errors during exchange rate retrieval', async () => {
            // Arrange
            const request: ExchangeGetRequest = { currency: 'USD', targetCurrency: 'EUR', value: 10 };

            // Set up the mock implementation to simulate an error
            jest.spyOn(mockExchangeRepository, 'fetchExchangeRate').mockRejectedValue(new Error('Mocked error'));

            // Act and Assert
            await expect(exchangeService.getExchange(request)).rejects.toThrow('Failed to fetch exchange rate');
        });
    });

    describe('postExchange', () => {
        it('should calculate exchanged values correctly', async () => {
            // Arrange
            const request: ExchangePostRequest = {
                targetCurrency: 'EUR',
                values: [
                    { currency: 'EUR', amount: 1 },
                    { currency: 'EUR', amount: 10 },
                ],
            };

            // Act
            const result: string = await exchangeService.postExchange(request);

            // Assert
            expect(result).toBe('1.00 EUR;10.00 EUR');
        });

        it('should handle errors during exchange rate retrieval', async () => {
            // Arrange
            const request: ExchangePostRequest = {
                targetCurrency: 'EUR',
                values: [
                    { currency: 'USD', amount: 20 },
                    { currency: 'EUR', amount: 10 },
                ],
            };

            // Set up the mock implementation to simulate an error
            jest.spyOn(mockExchangeRepository, 'fetchAllRates').mockRejectedValue(new Error('Mocked error'));

            // Act and Assert
            await expect(exchangeService.postExchange(request)).rejects.toThrow('Failed to fetch exchange rate');
        });
    });

    describe('sumValues', () => {
        it('should calculate the sum correctly', async () => {
            // Arrange
            const request: ExchangeSumRequestWithValues = {
                targetCurrency: 'EUR',
                values: [
                    { currency: 'USD', value: 100 },
                    { currency: 'SEK', value: 1000 },
                ],
            };

            // Act
            const result: ExchangeSumResponse = await exchangeService.sumValues(request);

            // Assert
            expect(result.value).toBe('176.43');
            expect(result.currency).toBe('EUR');
        });

        it('should handle errors during exchange rate retrieval', async () => {
            // Arrange
            const request: ExchangeSumRequestWithValues = {
                targetCurrency: 'USD',
                values: [
                    { currency: 'EUR', value: 100 },
                    { currency: 'SEK', value: 1000 },
                ],
            };

            // Set up the mock implementation to simulate an error
            jest.spyOn(mockExchangeRepository, 'fetchAllRates').mockRejectedValue(new Error('Mocked error'));

            // Act and Assert
            await expect(exchangeService.sumValues(request)).rejects.toThrow('Failed to fetch exchange rate');
        });
    });

});
