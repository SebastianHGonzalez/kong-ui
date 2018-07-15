import axios from "axios";
import {AxiosInstance} from "axios";
import * as urljoin from "url-join";


export interface IRestClientOptions {
    uri: string;
    qs?: any;
}

export interface IRestClient {
    endpoint: (endpointPath: string, trailingSlash?: boolean) => string;
    get: (options: IRestClientOptions) => Promise<any>;
}

export class RestClient implements IRestClient {

    constructor(private uri: string, private axiosInstance: AxiosInstance = axios) {
    }

    public get<T>(options: IRestClientOptions): Promise<T> {
        const {uri, qs} = options;
        return this.axiosInstance.get<T>(uri, {params: qs})
        .then((axionResponse: any) => Promise.resolve(axionResponse.data));
    }


    public endpoint(endpointPath: string, trailingSlash: boolean = true): string {
        const fullPath = urljoin(this.uri, endpointPath, '/');
        return trailingSlash? fullPath : fullPath.slice(0, -1);
    }
}
