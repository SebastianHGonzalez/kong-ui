import { IServiceFormState } from "../../components/Dashboard/services/ServiceForm";

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
    protocol: 'http' | 'https';
    host: string;
    port: number;
    path: string;
    name: string;
    retries: number;
    read_timeout: number;
    write_timeout: number;
}

export function formToServiceOptions(obj: IServiceFormState): IServiceOptions {
    const ret = {}
    for (const propName in obj) { 
      if (!(obj[propName] === null || obj[propName] === undefined)) {
        ret[propName] = obj[propName];
      }
    }
    return ret as any;
}