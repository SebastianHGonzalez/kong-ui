import { Button, FormControl, FormGroup, MenuItem, Select, TextField } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from 'src/store/InitialState';
import { formToServiceOptions, IService, IServiceOptions } from 'src/STSO/api/Service';
import Locale from 'src/STSO/locale/Locale';


interface IAddServiceFormProps extends React.Props<any> {
    locale: Locale;
    onSubmit: (data: IServiceOptions) => void;
    onCancel: () => void;
    service?: IService;
}

export interface IServiceFormState {
    name: string | null;
    protocol: 'http' | 'https';
    host: string | null;
    port: number | null;
    path: string | null;
    retries: number | null;
    connect_timeout: number | null;
    write_timeout: number | null;
    read_timeout: number | null;
    url: string | null;
}

export class AddServiceForm extends React.Component<IAddServiceFormProps, IServiceFormState> {

    constructor(props: IAddServiceFormProps) {
        super(props);

        this.state = Object.assign({
            connect_timeout: null,
            host: null,
            name: null,
            path: null,
            port: null,
            protocol: 'http',
            retries: null,
            url: null,
            write_timeout: null,
        }, props.service)

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleHostChange = this.handleHostChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleConnectTimeoutChange = this.handleConnectTimeoutChange.bind(this);
        this.handlePathChange = this.handlePathChange.bind(this);
        this.handlePortChange = this.handlePortChange.bind(this);
        this.handleProtocolChange = this.handleProtocolChange.bind(this);
        this.handleRetriesChange = this.handleRetriesChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleWriteTimeoutChange = this.handleWriteTimeoutChange.bind(this);
    }

    public handleSubmit(event: React.FormEvent<any>) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onSubmit(formToServiceOptions(this.state));
    }

    public handleCancel(event: any) {
        event.stopPropagation();
        this.props.onCancel();
    }

    public handleNameChange(event: any) {
        this.setState({
            name: event.target.value,
        })
    }

    public handleHostChange(event: any) {
        this.setState({
            host: event.target.value,
        });
    }

    public handleProtocolChange(event: any) {
        this.setState({
            protocol: event.target.value,
        });
    }

    public handlePortChange(event: any) {
        this.setState({
            port: parseInt(event.target.value, undefined),
        });
    }

    public handlePathChange(event: any) {
        this.setState({
            path: event.target.value,
        });
    }

    public handleRetriesChange(event: any) {
        this.setState({
            retries: parseInt(event.target.value, undefined),
        });
    }

    public handleConnectTimeoutChange(event: any) {
        this.setState({
            connect_timeout: parseInt(event.target.value, undefined),
        });
    }

    public handleWriteTimeoutChange(event: any) {
        this.setState({
            write_timeout: parseInt(event.target.value, undefined),
        });
    }

    public handleReadTimeoutChange(event: any) {
        this.setState({
            read_timeout: parseInt(event.target.value, undefined),
        });
    }

    public handleUrlChange(event: any) {
        this.setState({
            url: event.target.value,
        });
    }

    public render() {
        const locale = this.props.locale;
        return (
            <form onSubmit={this.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <InputName value={this.state.name} onChange={this.handleNameChange} locale={locale} />
                        <SelectProtocol value={this.state.protocol} onChange={this.handleProtocolChange} locale={locale} />
                        <InputHost value={this.state.host} onChange={this.handleHostChange} locale={locale} />
                        <InputPort value={this.state.port} onChange={this.handlePortChange} locale={locale} />
                        <InputPath value={this.state.path} onChange={this.handlePathChange} locale={locale} />
                        <InputRetries value={this.state.retries} onChange={this.handleRetriesChange} locale={locale} />
                        <InputConnectTimeout value={this.state.connect_timeout} onChange={this.handleConnectTimeoutChange} locale={locale} />
                        <InputWriteTimeout value={this.state.write_timeout} onChange={this.handleWriteTimeoutChange} locale={locale} />
                        <InputUrl value={this.state.url} onChange={this.handleUrlChange} locale={locale} />
                    </FormGroup>
                    <FormGroup>
                        <Button color='primary' type='submit'>
                            {this.props.service? locale.save : locale.add}
                        </Button>
                        <Button color='secondary' type='reset' onClick={this.handleCancel}>
                            {locale.cancel}
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        );
    }
}

interface IInputProps {
    value: string | number | null;
    onChange: (event: any) => void;
    locale: Locale;
}

function SelectProtocol({ value, onChange, locale }: IInputProps) {
    return (
        <Select onChange={onChange} value={value as string} >
            <MenuItem value='http'>http</MenuItem>
            <MenuItem value='https'>https</MenuItem>
        </Select>
    );
}
function InputName({ value, onChange, locale }: IInputProps) { return (textInput(value, onChange, locale.name)); }
function InputHost({ value, onChange, locale }: IInputProps) { return (textInput(value, onChange, locale.host, locale.hostDescription)); }
function InputPath({ value, onChange, locale }: IInputProps) { return (textInput(value, onChange, locale.path, locale.pathDescription)); }
function InputPort({ value, onChange, locale }: IInputProps) { return (numberInput(value, onChange, locale.port, locale.portDescription)); }
function InputRetries({ value, onChange, locale }: IInputProps) { return (numberInput(value, onChange, locale.retries, locale.retriesDescription)); }
function InputConnectTimeout({ value, onChange, locale }: IInputProps) { return (numberInput(value, onChange, locale.connectTimeout, locale.connectTimeoutDescription)); }
function InputWriteTimeout({ value, onChange, locale }: IInputProps) { return (numberInput(value, onChange, locale.writeTimeout, locale.writeTimeoutDescription)); }
function InputUrl({ value, onChange, locale }: IInputProps) { return (input(value, 'url', onChange, locale.url, locale.urlDescription)); }

function textInput(value: string | number | null, onChange: any, label: string, helperText?: string) {
    return (input(value, 'text', onChange, label, helperText));
}

function numberInput(value: string | number | null, onChange: any, label: string, helperText?: string) {
    return (input(value, 'number', onChange, label, helperText));
}

function input(value: string | number | null, type: string, onChange: any, label: string, helperText?: string, required?: boolean) {
    return (
        <TextField
            onChange={onChange}
            required={required}
            type={type}
            id={label}
            label={label}
            helperText={helperText}
            margin="normal"
            value={value as any}
        />
    );
}

function mapStateToProps({ locale }: IStoreState) {
    return {
        locale,
    };
}

export default connect(mapStateToProps)(AddServiceForm);
