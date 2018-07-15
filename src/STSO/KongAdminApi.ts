import { AxiosResponse } from "axios";

import { IRestClient, IRestClientOptions, RestClient } from "./RestClient";


export interface INodeInformation {
    node_id: string;
}

export interface INodeStatus {
    server: any;
    database: { reacheable: boolean };
}

export interface IKongAdminApi {
    nodeInformation: () => Promise<INodeInformation>;
    nodeStatus: () => Promise<INodeStatus>;
}

export default class KongAdminApi implements IKongAdminApi {
 
    public static withUri(uri: string) {
        return new KongAdminApi(new RestClient(uri));
    }

    constructor(private restClient: IRestClient){

    }

    public nodeInformation(){
        const options: IRestClientOptions = {
            uri: this.restClient.endpoint('/'),
        };

        return this.restClient.get(options)
        .then((axiosResponse: AxiosResponse) => axiosResponse.data);
    }

    public nodeStatus() {
        const options: IRestClientOptions = {
            uri: this.restClient.endpoint('/status'),
        };

        return this.restClient.get(options)
        .then((axiosResponse: AxiosResponse) => axiosResponse.data);
    }
}