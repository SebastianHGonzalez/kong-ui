export type protocol = 'http' | 'https'

export type method = 'GET' | 'POST' | 'PATCH' | 'OPTIONS'

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
