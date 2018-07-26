export default class Locale {
    public add = "Add";
    public cancel = "Cancel";
    public connectTimeout = "Connect Timeout";
    public connectTimeoutDescription = "The timeout in milliseconds for establishing a connection to the upstream server. Defaults to 60000.";
    public delete = "Delete";
    public edit = "Edit";
    public host = "Host";
    public hostDescription = "The host of the upstream server.";
    public no = "No";
    public name = "Name";
    public optional = "Optional";
    public path = "Path";
    public pathDescription = "The path to be used in requests to the upstream server. Empty by default.";
    public port = "Port";
    public portDescription = "The upstream server port. Defaults to 80.";
    public retries = "Retries";
    public retriesDescription = "The number of retries to execute upon failure to proxy. The default is 5.";
    public route = "Route";
    public save = "Save";
    public service = "Service";
    public services = "Services";
    public writeTimeout = "Write Timeout";
    public writeTimeoutDescription = "The timeout in milliseconds between two successive write operations for transmitting a request to the upstream server. Defaults to 60000.";
    public url = "Url";
    public urlDescription = 'Shorthand attribute to set protocol, host, port and path at once. This attribute is write-only (the Admin API never "returns" the url).'
}