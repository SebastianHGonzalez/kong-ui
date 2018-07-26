import { IRoute, IRouteOptions } from "src/STSO/api/Route";
import { IService, IServiceOptions } from "src/STSO/api/Service";
import { IRestClient, IRestClientOptions, RestClient } from "./RestClient";


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
    updateService: (serviceOptions: IServiceOptions) => Promise<IService>;
    deleteService: (serviceId: string) => Promise<any>;
    routes: () => Promise<IRoute[]>;
    addRoute: (routeOptions: IRouteOptions) => Promise<IRoute>;
    updateRoute: (routeOptions: IRouteOptions) => Promise<IRoute>;
    deleteRoute: (routeId: string) => Promise<any>;
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

    public deleteService(serviceId: string): Promise<any> {
        const options: IRestClientOptions = {
            url: this.restClient.endpoint(`/services/${serviceId}`),
        }
        return this.restClient.delete(options);
    }

    public updateService(serviceOptions: IService): Promise<IService>{
        const options: IRestClientOptions = {
            data: serviceOptions,
            url: this.restClient.endpoint(`/services/${serviceOptions.id}`)
        }
        return this.restClient.patch(options);
    }

    public routes() {
        const options: IRestClientOptions = {
            url: this.restClient.endpoint('/routes'),
        };

        return this.restClient.get(options).then((response: any) => response.data);
    }

    public addRoute(routeOptions: IRouteOptions): Promise<IRoute> {
        const options: IRestClientOptions = {
            data: routeOptions,
            url: this.restClient.endpoint('/routes'),
        }      
        return this.restClient.post(options)  
    }

    public deleteRoute(routeId: string): Promise<any> {
        const options: IRestClientOptions = {
            url: this.restClient.endpoint(`/routes/${routeId}`),
        }
        return this.restClient.delete(options);
    }

    public updateRoute(routeOptions: IRoute): Promise<IRoute>{
        const options: IRestClientOptions = {
            data: routeOptions,
            url: this.restClient.endpoint(`/routes/${routeOptions.id}`)
        }
        return this.restClient.patch(options);
    }
}