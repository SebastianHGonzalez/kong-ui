import { Card, CardContent, CardHeader } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import AsyncContent from 'src/components/common/AsyncContent';
import Service from 'src/components/Dashboard/services/Service';
import { ILoginData } from 'src/reducers/LoginReducer';
import { IService } from 'src/STSO/KongAdminApi';
import Locale from 'src/STSO/locale/Locale';
import { IStoreState } from '../../store/InitialState';


interface IServerServicesProps extends React.Props<any> {
    login: ILoginData;
    locale: Locale;
}

interface IServerServicesState {
    services: IService[] | null;
}

export class KongServerServices extends React.Component<IServerServicesProps, IServerServicesState> {

    constructor(props: IServerServicesProps) {
        super(props);

        this.state = {
            services: null
        }
    }

    public componentDidMount() {
        this.fetchServices();
    }

    public render() {
        return (
            <Card>
                <CardHeader title="Services" />
                <CardContent>
                    <AsyncContent content={this.services} />
                </CardContent>
            </Card>
        );
    }

    private fetchServices() {
        this.props.login.api
            .services()
            .then((services: IService[]) => this.setState({ services }));
    }

    private get services() {
        const services = this.state.services;

        if (services == null) {
            return null;
        } else if (services.length) {
            return services.map(toService);
        }
        return this.props.locale.noServices;
    }
}

function toService(service: IService) {
    return <Service service={service} />
}

function mapStateToProps({ locale }: IStoreState) {
    return {
        locale,
    }
}

export default connect(mapStateToProps)(KongServerServices);
