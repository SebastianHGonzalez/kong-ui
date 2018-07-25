import { Button } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { updateService } from 'src/actions/ServiceActionCreators';
import ServiceDialog from 'src/components/Dashboard/services/ServiceDialog';
import { IStoreState } from 'src/store/InitialState';
import { IService, IServiceOptions } from 'src/STSO/api/Service';
import Locale from 'src/STSO/locale/Locale';


export interface IServiceEditButtonProps extends React.Props<any> {
    service: IService;
    locale: Locale;
    updateService: (data: IServiceOptions) => any;
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

    public handleClose(data: IService) {
        this.setState({
            dialogOpen: false,
        });
        if (data.id) {
            this.props.updateService(data);
        }
    }

    public render() {
        return (
            <div>
                <Button onClick={this.handleClick}>
                    {`${this.props.locale.edit} ${this.props.locale.service}`}
                </Button>
                <ServiceDialog open={this.state.dialogOpen}
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

export default connect(mapStateToProps, { updateService })(ServiceEditButton);
