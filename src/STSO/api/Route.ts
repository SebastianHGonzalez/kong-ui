import { IRouteFormState } from "src/components/Dashboard/routes/RouteForm";

export type protocol = 'http' | 'https';

export type method = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';


export interface IRouteOptions {
    protocols: protocol[];
    methods?: method[];
    hosts?: string[];
    paths?: string[];
    strip_path?: boolean;
    preserve_host?: boolean;
    service: { id: string };
}

export interface IRoute {
    id: string;
    created_at: number;
    updated_at: number;
    protocols: protocol[];
    methods: method[];
    hosts: string[];
    paths: string[];
    regex_priority: number;
    strip_path: boolean;
    preserve_host: boolean;
    service: {
        id: string
    }
}

export function toProtocol(protocolString: string): protocol {
    switch (protocolString.toLowerCase()) {
        case 'http': return 'http';
        case 'https': return 'https';
        default: throw Error;
    }
}

export function toMethod(methodString: string): method {
    switch (methodString.toUpperCase()) {
        case 'GET': return 'GET';
        case 'HEAD': return 'HEAD';
        case 'POST': return 'POST';
        case 'PUT': return 'PUT';
        case 'DELETE': return 'DELETE';
        case 'CONNECT': return 'CONNECT';
        case 'OPTIONS': return 'OPTIONS';
        case 'TRACE': return 'TRACE';
        case 'PATCH': return 'PATCH';
        default: throw Error;
    }
}


export function formToRouteOptions(obj: IRouteFormState): IRouteOptions {
    const ret = {}
    for (const propName in obj) { 
      if (!(obj[propName] === null || obj[propName] === undefined)) {
        ret[propName] = obj[propName];
      }
    }
    return ret as any;
}