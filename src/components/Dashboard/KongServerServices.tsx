import { Card, CardActions, CardContent, CardHeader, List } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import * as serviceActionCreators from 'src/actions/ServiceActionCreators';
import AsyncContent from 'src/components/common/AsyncContent';
import AddServiceAction from 'src/components/Dashboard/services/AddServiceAction';
import Service from 'src/components/Dashboard/services/Service';
import { ILoginData } from 'src/reducers/LoginReducer';
import { IStoreState } from 'src/store/InitialState';
import { IService } from 'src/STSO/KongAdminApi';
import Locale from 'src/STSO/locale/Locale';


interface IServerServicesProps extends React.Props<any> {
    login: ILoginData;
    locale: Locale;
    services: IService[];
}

export class KongServerServices extends React.Component<IServerServicesProps, any> {

    constructor(props: IServerServicesProps) {
        super(props);

        this.fetchServices = this.fetchServices.bind(this);
    }

    public componentDidMount() {
        this.fetchServices();
    }

    public render() {
        return (
            <Card>
                <CardHeader title="Services" />
                <CardActions>
                    <AddServiceAction locale={this.props.locale} login={this.props.login} updateServices={this.fetchServices} />
                </CardActions>
                <CardContent>
                    <AsyncContent content={this.services} />
                </CardContent>
            </Card>
        );
    }

    private fetchServices() {
        (this.props as any).fetchServices();
    }

    private get services() {
        const services = this.props.services;

        if (services == null) {
            return null;
        } else if (services.length) {
            return (
                <List>
                {services.map(toService)}
                </List>
        );
        }
        return this.renderNoServices();
    }

    private renderNoServices() {
        return this.props.locale.noServices;
    }
}

function toService(service: IService) {
    return <Service key={service.id} service={service} />
}

function mapStateToProps({ locale, services }: IStoreState) {
    return {
        locale,
        services,
    }
}

export default connect(mapStateToProps, serviceActionCreators)(KongServerServices);
