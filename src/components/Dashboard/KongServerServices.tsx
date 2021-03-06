import { Card, CardActions, CardContent, List } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import * as serviceActionCreators from 'src/actions/ServiceActionCreators';
import AsyncContent from 'src/components/common/AsyncContent';
import Service from 'src/components/Dashboard/services/Service';
import ServiceAddButton from 'src/components/Dashboard/services/ServiceAddButton';
import { IStoreState } from 'src/store/InitialState';
import ILocale from 'src/STSO/locale/Locale';
import { IServiceState } from '../../reducers/ServiceReducer';


interface IServerServicesProps extends React.Props<any> {
    locale: ILocale;
    services: IServiceState;
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
        return `${this.props.locale.common.no} ${this.props.locale.common.services}`;
    }
}

function mapStateToProps({ locale, services }: IStoreState) {
    return {
        locale,
        services,
    }
}

export default connect(mapStateToProps, serviceActionCreators)(KongServerServices);
