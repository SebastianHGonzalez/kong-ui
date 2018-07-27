import { Button } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import * as serviceActionCreators from 'src/actions/ServiceActionCreators';
import ServiceDialog from 'src/components/Dashboard/services/ServiceDialog';
import { ILoginData } from 'src/reducers/LoginReducer';
import { IStoreState } from 'src/store/InitialState';
import { IServiceOptions } from 'src/STSO/api/Service';
import ILocale from 'src/STSO/locale/Locale';

interface IAddServiceActionProps extends React.Props<any> {
    login: ILoginData;
    locale: ILocale;
    createService: (data: IServiceOptions) => any;
}

interface IAddServiceActionState {
    dialogOpen: boolean;
}

export class ServiceAddButton extends React.Component<IAddServiceActionProps, IAddServiceActionState> {

    constructor(props: IAddServiceActionProps) {
        super(props);

        this.state = {
            dialogOpen: false,
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
    }

    public render() {
        return (
            <div>
                <Button color='primary' onClick={this.handleButtonClick}>
                    {this.props.locale.common.add} {this.props.locale.common.service}
                </Button>
                <ServiceDialog open={this.state.dialogOpen}
                    onClose={this.handleDialogClose} />
            </div>
        );
    }

    private handleDialogClose(data?: IServiceOptions) {
        this.setState({ dialogOpen: false });
        if (data) {
            this.createService(data);
        }
    }

    private handleButtonClick(event: any) {
        event.stopPropagation();
        this.setState({ dialogOpen: !this.state.dialogOpen })
    }

    private createService(data: IServiceOptions) {
        this.props.createService(data);
    }
}

function mapStateToProps({ locale, login }: IStoreState) {
    return {
        locale,
        login,
    };
}
export default connect(mapStateToProps, serviceActionCreators)(ServiceAddButton);
