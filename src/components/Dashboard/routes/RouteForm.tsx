import { FormControl, TextField } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import Actions from 'src/components/common/form/transactional/Actions';
import { IServiceState } from 'src/reducers/ServiceReducer';
import { IStoreState } from 'src/store/InitialState';
import { IRoute, IRouteOptions, toMethod, toProtocol } from "src/STSO/api/Route";
import ILocale from "src/STSO/locale/Locale";
import SelectService from './form/SelectService';


interface IRouteFormProps extends React.Props<any> {
    locale: ILocale;
    onSubmit: (data?: IRouteOptions) => void;
    route?: IRoute;
    services: IServiceState;
}

export interface IRouteFormState {
    protocols: string;
    methods: string;
    hosts: string;
    paths: string;
    strip_path: boolean;
    preserve_host: boolean;
    service_id: string;
}

export class RouteForm extends React.Component<IRouteFormProps, IRouteFormState> {
    constructor(props: IRouteFormProps) {
        super(props);

        this.state = {
            hosts: '',
            methods: '',
            paths: '',
            preserve_host: false,
            protocols: '',
            service_id: '',
            strip_path: false,
        }

        if (props.route) {
            this.state = {
                hosts: props.route.hosts.join(', '),
                methods: props.route.methods.join(', '),
                paths: props.route.paths.join(', '),
                preserve_host: props.route.preserve_host,
                protocols: props.route.protocols.join(', '),
                service_id: props.route.service.id,
                strip_path: props.route.strip_path,
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public handleChange(event: any) {
        this.setState({ [event.target.name]: event.target.value } as any);
    };

    public handleCancel(event: any) {
        event.stopPropagation();
        this.props.onSubmit();
    }

    public handleSubmit(event: any) {
        event.preventDefault();
        event.stopPropagation();

        this.props.onSubmit(this.routeOptions);
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit} onReset={this.handleCancel}>
                <FormControl>
                    <TextField
                    name='methods'
                    placeholder='get, post'
                    onChange={this.handleChange}
                    label={this.props.locale.route.methods}
                    helperText={this.props.locale.route.methodsDescription}
                    />
                    <TextField
                    name='protocols'
                    placeholder='http, https'
                    onChange={this.handleChange}
                    label={this.props.locale.route.protocols}
                    helperText={this.props.locale.route.protocolsDescription}
                    />
                    <SelectService
                        services={this.props.services}
                        value={this.state.service_id}
                        onChange={this.handleChange}
                        name='service_id'
                    />
                    <Actions locale={this.props.locale} editing={this.props.route} />
                </FormControl>
            </form>
        );
    }

    public get routeOptions(): IRouteOptions {
        return {
            hosts: this.state.hosts.replace(' ', '').split(','),
            methods: this.state.methods.replace(' ', '').split(',').map(toMethod),
            paths: this.state.paths.replace(' ', '').split(','),
            preserve_host: this.state.preserve_host,
            protocols: this.state.protocols.replace(' ', '').split(',').map(toProtocol),
            service: { id: this.state.service_id },
            strip_path: this.state.strip_path,
        }
    }
}

function mapStateToProps({ locale, services }: IStoreState) {
    return {
        locale,
        services,
    };
}

export default connect(mapStateToProps)(RouteForm);