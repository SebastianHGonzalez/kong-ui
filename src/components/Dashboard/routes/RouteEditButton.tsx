import { Button } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { updateRoute } from 'src/actions/RouteActionCreators';
import RouteDialog from 'src/components/Dashboard/routes/RouteDialog';
import { IStoreState } from 'src/store/InitialState';
import { IRoute, IRouteOptions } from 'src/STSO/api/Route';
import ILocale from 'src/STSO/locale/Locale';


export interface IRouteEditButtonProps extends React.Props<any> {
    route: IRoute;
    locale: ILocale;
    updateRoute: (data: IRouteOptions) => any;
}

export interface IRouteEditButtonState {
    dialogOpen: boolean;
}

export class RouteEditButton extends React.Component<IRouteEditButtonProps, IRouteEditButtonState> {
    constructor(props: IRouteEditButtonProps) {
        super(props);

        this.state = {
            dialogOpen: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    public handleClick() {
        this.setState({
            dialogOpen: !this.state.dialogOpen,
        });
    }

    public handleClose(data: IRoute) {
        this.setState({
            dialogOpen: false,
        });
        if (data.id) {
            this.props.updateRoute(data);
        }
    }

    public render() {
        return (
            <div>
                <Button onClick={this.handleClick}>
                    {`${this.props.locale.common.edit} ${this.props.locale.common.route}`}
                </Button>
                <RouteDialog open={this.state.dialogOpen}
                    onClose={this.handleClose}
                    route={this.props.route} />
            </div>
        );
    }
}

function mapStateToProps({ locale }: IStoreState) {
    return {
        locale,
    };
}

export default connect(mapStateToProps, { updateRoute })(RouteEditButton);
