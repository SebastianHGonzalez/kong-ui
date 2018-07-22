import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AxiosInstance } from "axios";
import * as urljoin from "url-join";


export type IRestClientOptions = AxiosRequestConfig;

export interface IRestClient {
    endpoint: (endpointPath: string, trailingSlash?: boolean) => string;
    get: (options: IRestClientOptions) => Promise<any>;
    post: (options: IRestClientOptions) => Promise<any>;
}

export class RestClient implements IRestClient {

    constructor(private uri: string, private axiosInstance: AxiosInstance = axios) {
    }

    public get<T>(options: IRestClientOptions): Promise<T> {
        return this.axiosInstance.request({ method: 'get', ...options })
            .then((axionResponse: any) => Promise.resolve(axionResponse.data));
    }

    public post<T>(options: IRestClientOptions): Promise<T> {
        return this.axiosInstance.request({ method: 'post', ...options })
            .then((axiosResponse: AxiosResponse) => Promise.resolve(axiosResponse.data));
    }

    public endpoint(endpointPath: string, trailingSlash: boolean = true): string {
        const fullPath = urljoin(this.uri, endpointPath, '/');
        return trailingSlash ? fullPath : fullPath.slice(0, -1);
    }
}
