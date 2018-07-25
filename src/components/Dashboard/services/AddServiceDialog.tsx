import { Dialog, DialogTitle } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from 'src/store/InitialState';
import { IServiceOptions } from 'src/STSO/KongAdminApi';
import Locale from 'src/STSO/locale/Locale';
import AddServiceForm from './AddServiceForm';


interface IAddServiceDialogProps extends React.Props<any> {
    open: boolean;
    onClose: (data?: IServiceOptions) => void;
    locale: Locale;
}

export class AddServiceDialog extends React.Component<IAddServiceDialogProps> {

    constructor(props: IAddServiceDialogProps) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleSubmit(data: IServiceOptions) {
        this.props.onClose(data);
    }

    public handleClose() {
        this.props.onClose();
    }

    public render() {
        return (
            <Dialog open={this.props.open} onClose={this.handleClose}>
                <DialogTitle>
                    {`${this.props.locale.add} ${this.props.locale.service}`}
                </DialogTitle>
                <AddServiceForm onSubmit={this.handleSubmit}
                    onCancel={this.handleClose} />
            </Dialog>
        );
    }
}

function mapStateToProps({ locale }: IStoreState) {
    return {
        locale,
    }
}

export default connect(mapStateToProps)(AddServiceDialog);
