import { IRestClient, IRestClientOptions, RestClient } from "./RestClient";


export interface IServiceOptions {
    name?: string;
    protocol?: 'http' | 'https';
    host: string;
    port?: number;
    path?: string;
    retries?: number;
    connect_timeout?: number;
    write_timeout?: number;
    url?: string;
}
export interface IService {
    id: string;
    created_at: number;
    updated_at: number;
    connect_timeout: number;
    protocol: string;
    host: string;
    port: number;
    path: string;
    name: string;
    retries: number;
    read_timeout: number;
    write_timeout: number;
}

export interface INodeInformation {
    hostname: string;
    node_id: string;
    lua_version: string;
    plugins: {
        available_on_server: string[],
        enabled_in_cluster: string[]
    };
    configuration: any;
    tagline: string;
    version: string;
}

export interface INodeStatus {
    server: any;
    database: { reacheable: boolean };
}

export interface IKongAdminApi {
    nodeInformation: () => Promise<INodeInformation>;
    nodeStatus: () => Promise<INodeStatus>;
    services: () => Promise<IService[]>;
    addService: (serviceOptions: IServiceOptions) => Promise<IService>;
}

export default class KongAdminApi implements IKongAdminApi {

    public static withUri(uri: string) {
        return new KongAdminApi(new RestClient(uri));
    }

    constructor(private restClient: IRestClient) {

    }

    public nodeInformation() {
        const options: IRestClientOptions = {
            url: this.restClient.endpoint('/'),
        };

        return this.restClient.get(options)
    }

    public nodeStatus() {
        const options: IRestClientOptions = {
            url: this.restClient.endpoint('/status'),
        };

        return this.restClient.get(options)
    }

    public services() {
        const options: IRestClientOptions = {
            url: this.restClient.endpoint('/services'),
        };

        return this.restClient.get(options).then((response: any) => response.data);
    }

    public addService(serviceOptions: IServiceOptions): Promise<IService> {
        const options: IRestClientOptions = {
            data: serviceOptions,
            url: this.restClient.endpoint('/services'),
        }      
        return this.restClient.post(options)  
    }
}