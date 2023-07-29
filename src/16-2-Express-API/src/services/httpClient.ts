import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { injectable } from 'inversify';

export interface HttpClient {
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    // Add other HTTP methods as needed
}

@injectable()
export class AxiosHttpClient implements HttpClient {
    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await axios.get(url, config);
        return response.data;
    }

    async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await axios.post(url, data, config);
        return response.data;
    }
}
