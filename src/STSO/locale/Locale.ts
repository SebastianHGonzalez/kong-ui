import en from "./languages/en";

export function Locale(lang: string) {
    switch(lang.toLowerCase().substring(0,2)){
        default: return en;
    }
}

export default interface ILocale {
    common:{
        add: string;
        cancel: string;
        delete: string;
        edit: string;
        optional: string;
        name: string;
        no: string;
        route: string;
        save: string;
        service: string;
        services: string;
    }
    service:{
        connectTimeout: string;
        connectTimeoutDescription: string;
        host: string;
        hostDescription: string;
        path: string;
        pathDescription: string;
        port: string;
        portDescription: string;
        retries: string;
        retriesDescription: string;
        url: string;
        urlDescription: string;
        writeTimeout: string;
        writeTimeoutDescription: string;
    }
    route:{
        methods: string;
        methodsDescription: string;
    }
};