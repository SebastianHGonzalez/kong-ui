import { Button } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import * as serviceActionCreators from 'src/actions/ServiceActionCreators';
import AddServiceDialog from 'src/components/Dashboard/services/AddServiceDialog';
import { ILoginData } from 'src/reducers/LoginReducer';
import { IServiceOptions } from 'src/STSO/KongAdminApi';
import Locale from 'src/STSO/locale/Locale';

interface IAddServiceActionProps extends React.Props<any> {
    login: ILoginData;
    locale: Locale;
    updateServices: () => void;
}

interface IAddServiceActionState {
    dialogOpen: boolean;
}

export class AddServiceAction extends React.Component<IAddServiceActionProps, IAddServiceActionState> {

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
                <Button color='primary' onClick={this.handleButtonClick}>{this.props.locale.add}</Button>
                <AddServiceDialog locale={this.props.locale} open={this.state.dialogOpen} onClose={this.handleDialogClose} />
            </div>
        );
    }

    private handleDialogClose(data?: IServiceOptions) {
        this.setState({ dialogOpen: false });
        if(data){
            this.createService(data);
        }
    }

    private handleButtonClick(event: any) {
        event.stopPropagation();
        this.setState({ dialogOpen: !this.state.dialogOpen })
    }

    private createService(data: IServiceOptions){
        (this.props as any).createService(data);
    }
}

export default connect(null, serviceActionCreators)(AddServiceAction);