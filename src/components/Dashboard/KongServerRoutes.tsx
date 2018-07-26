import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { fetchRoutes } from 'src/actions/RouteActionCreators';
import AsyncContent from 'src/components/common/AsyncContent';
import Route from 'src/components/Dashboard/routes/Route';
import RouteAddButton from 'src/components/Dashboard/routes/RouteAddButton';
import { IRouteState } from 'src/reducers/RouteReducer';
import { IStoreState } from 'src/store/InitialState';
import { IRoute } from 'src/STSO/api/Route';


export interface IKongServerRoutesProps extends React.Props<any> {
    routes: IRouteState;
    fetchRoutes: () => any;
}

export class KongServerRoutes extends React.Component<IKongServerRoutesProps> {

    public componentDidMount(){
        this.props.fetchRoutes();
    }

    public get routes() {
        return (
            this.props.routes.data.map((route: IRoute) =>
                <Route key={route.id} route={route} />
            )
        );
    }

    public render() {
        return (
            <Card>
                <CardHeader title="Routes" />
                <CardActions>
                    <RouteAddButton />
                </CardActions>
                <CardContent>
                    <AsyncContent content={this.routes} />
                </CardContent>
            </Card>
        );
    }
}

function mapStateToProps({ routes }: IStoreState) {
    return {
       routes,
    };
}

export default connect(mapStateToProps, {fetchRoutes})(KongServerRoutes);
