import ILocale from "src/STSO/locale/Locale";

const en: ILocale = {
    common: {
        add: "Add",
        cancel: "Cancel",
        delete: "Delete",
        edit: "Edit",
        name: "Name",
        no: "No",
        optional: "Optional",
        route: "Route",
        save: "Save",
        service: "Service",
        services: "Services",
    },
    route: {
        methods: 'methods',
        methodsDescription: `A list of HTTP methods that match this Route. For example: '"GET", "POST"'. At least one of hosts, paths, or methods must be set.`,
    },
    service: {
        connectTimeout: "Connect Timeout",
        connectTimeoutDescription: "The timeout in milliseconds for establishing a connection to the upstream server. Defaults to 60000.",
        host: "Host",
        hostDescription: "The host of the upstream server.",
        path: "Path",
        pathDescription: "The path to be used in requests to the upstream server. Empty by default.",
        port: "Port",
        portDescription: "The upstream server port. Defaults to 80.",
        retries: "Retries",
        retriesDescription: "The number of retries to execute upon failure to proxy. The default is 5.",
        url: "Url",
        urlDescription: 'Shorthand attribute to set protocol, host, port and path at once. This attribute is write-only (the Admin API never "returns" the url).',
        writeTimeout: "Write Timeout",
        writeTimeoutDescription: "The timeout in milliseconds between two successive write operations for transmitting a request to the upstream server. Defaults to 60000.",
    },
};

export default en;