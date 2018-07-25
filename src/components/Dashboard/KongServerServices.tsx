import { Card, CardActions, CardContent, CardHeader, List } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import * as serviceActionCreators from 'src/actions/ServiceActionCreators';
import AsyncContent from 'src/components/common/AsyncContent';
import Service from 'src/components/Dashboard/services/Service';
import ServiceAddButton from 'src/components/Dashboard/services/ServiceAddButton';
import { IStoreState } from 'src/store/InitialState';
import { IService } from 'src/STSO/api/Service';
import Locale from 'src/STSO/locale/Locale';


interface IServerServicesProps extends React.Props<any> {
    locale: Locale;
    services: {
        loading: boolean,
        data: IService[],
    };
    deleteService: (id: string) => any;
    fetchServices: () => any;
}

export class KongServerServices extends React.Component<IServerServicesProps, any> {
    public componentDidMount() {
        this.props.fetchServices()
    }
    
    public render() {
        return (
            <Card>
                <CardHeader title="Services" />
                <CardActions>
                    <ServiceAddButton />
                </CardActions>
                <CardContent>
                    <AsyncContent content={this.services} />
                </CardContent>
            </Card>
        );
    }

    private get services() {
        const services = this.props.services;

        if (services.loading) {
            return null;
        } else if (services.data.length) {
            return (
                <List>
                    {
                        services.data.map(service =>
                            <Service key={service.id} service={service} />
                        )
                    }
                </List>
            );
        }
        return this.renderNoServices();
    }

    private renderNoServices() {
        return `${this.props.locale.no} ${this.props.locale.services}`;
    }
}

function mapStateToProps({ locale, services }: IStoreState) {
    return {
        locale,
        services,
    }
}

export default connect(mapStateToProps, serviceActionCreators)(KongServerServices);
