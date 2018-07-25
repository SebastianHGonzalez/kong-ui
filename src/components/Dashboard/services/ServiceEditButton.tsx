import { Button } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import EditServiceDialog from 'src/components/Dashboard/services/EditServiceDialog';
import { IStoreState } from 'src/store/InitialState';
import { IService } from 'src/STSO/KongAdminApi';
import Locale from 'src/STSO/locale/Locale';


export interface IServiceEditButtonProps extends React.Props<any> {
    service: IService;
    locale: Locale;
}

export interface IServiceEditButtonState {
    dialogOpen: boolean;
}

export class ServiceEditButton extends React.Component<IServiceEditButtonProps, IServiceEditButtonState> {
    constructor(props: IServiceEditButtonProps) {
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

    public handleClose() {
        this.setState({
            dialogOpen: false,
        });
    }

    public render() {
        return (
            <div>
                <Button onClick={this.handleClick}>
                    {`${this.props.locale.edit} ${this.props.locale.service}`}
                </Button>
                <EditServiceDialog open={this.state.dialogOpen}
                    onClose={this.handleClose}
                    service={this.props.service} />
            </div>
        );
    }
}

function mapStateToProps({ locale }: IStoreState) {
    return {
        locale,
    };
}

export default connect(mapStateToProps)(ServiceEditButton);
