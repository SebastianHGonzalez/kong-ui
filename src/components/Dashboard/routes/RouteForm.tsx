import { Button, FormControl, FormGroup, MenuItem, Select } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { IServiceState } from 'src/reducers/ServiceReducer';
import { IStoreState } from 'src/store/InitialState';
import { IRoute, IRouteOptions } from "src/STSO/api/Route";
import { IService } from 'src/STSO/api/Service';
import Locale from "src/STSO/locale/Locale";


interface IRouteFormProps extends React.Props<any> {
    locale: Locale;
    onSubmit: (data: IRouteOptions) => void;
    onCancel: () => void;
    route?: IRoute;
    services: IServiceState;
}

interface IRouteFormState {
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

        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public handleChange(event: any) {
        this.setState({ [event.target.name]: event.target.value } as any);
    };

    public handleCancel(event: any) {
        event.stopPropagation();
        this.props.onCancel();
    }

    public render() {
        return (
            <form>
                <FormControl>
                    {this.renderSelectService()}
                    {this.renderButtons()}
                </FormControl>
            </form>
        );
    }

    public renderButtons() {
        return (
            <FormGroup>
                <Button color='primary' type='submit'>
                    {this.props.route ? this.props.locale.save : this.props.locale.add}
                </Button>
                <Button color='secondary' type='reset' onClick={this.handleCancel}>
                    {this.props.locale.cancel}
                </Button>
            </FormGroup>
        );
    }

    public renderSelectService() {
        return (
            <FormControl required={true}>
                <Select value={this.state.service_id}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'service_id',
                    }}>
                    {this.props.services.data.map((service: IService) =>
                        <MenuItem key={service.id} value={service.id}>
                            {service.name}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        );
    }
}

function mapStateToProps({ locale, services }: IStoreState) {
    return {
        locale,
        services,
    };
}

export default connect(mapStateToProps)(RouteForm);