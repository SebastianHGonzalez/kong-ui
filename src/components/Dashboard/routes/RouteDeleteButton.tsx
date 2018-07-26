import { Button } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { deleteRoute } from 'src/actions/RouteActionCreators';
import { IStoreState } from 'src/store/InitialState';
import { IRoute } from 'src/STSO/api/Route';
import Locale from 'src/STSO/locale/Locale';

interface IRouteDeleteButtonProps extends React.Props<any> {
    route: IRoute;
    locale: Locale;
    deleteThisRoute: (id: string) => (event: any) => any;
}

export class RouteDeleteButton extends React.Component<IRouteDeleteButtonProps> {
    public render() {
        return (
            <Button color='secondary'
                onClick={
                    this.props.deleteThisRoute(this.props.route.id)
                }>
                {this.props.locale.delete} {this.props.locale.route}
            </Button>
        );
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        deleteThisRoute: (id: string) => (event: any) => {
            event.stopPropagation();
            dispatch(deleteRoute(id))
        },
    };
}

function mapStateToProps({ locale }: IStoreState) {
    return {
        locale,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteDeleteButton);
