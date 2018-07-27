import { Button } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { createRoute } from 'src/actions/RouteActionCreators';
import RouteDialog from 'src/components/Dashboard/routes/RouteDialog';
import { IStoreState } from 'src/store/InitialState';
import { IRouteOptions } from 'src/STSO/api/Route';
import ILocale from 'src/STSO/locale/Locale';


interface IRouteAddButtonProps extends React.Props<any> {
    locale: ILocale;
    createRoute: (routeOptions: IRouteOptions) => any;
}

interface IRouteAddButtonState {
    dialogOpen: boolean
}

export class RouteAddButton extends React.Component<IRouteAddButtonProps, IRouteAddButtonState> {
    constructor(props: IRouteAddButtonProps) {
        super(props);

        this.state = {
            dialogOpen: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
    }

    public handleClick() {
        this.setState({ dialogOpen: !this.state.dialogOpen });
    }

    public handleDialogClose(data?: IRouteOptions) {
        this.setState({ dialogOpen: false });
        if (data) {
            this.props.createRoute(data);
        }
    }

    public render() {
        return (
            <div>
                <Button variant='outlined' size='large' color='primary' onClick={this.handleClick}>
                    {this.props.locale.common.add} {this.props.locale.common.route}
                </Button>
                <RouteDialog open={this.state.dialogOpen}
                    onClose={this.handleDialogClose} />
            </div>
        );
    }
}

function mapStateToProps({ locale }: IStoreState) {
    return {
        locale,
    };
}

export default connect(mapStateToProps, { createRoute })(RouteAddButton);
