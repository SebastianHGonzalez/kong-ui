import { Dialog, DialogTitle } from '@material-ui/core';
import * as React from 'react';

import { IServiceOptions } from 'src/STSO/KongAdminApi';
import Locale from 'src/STSO/locale/Locale';
import AddServiceForm from './AddServiceForm';


interface IAddServiceDialogProps extends React.Props<any> {
    open: boolean;
    onClose: (data?: IServiceOptions) => void;
    locale: Locale;
}

export default class AddServiceDialog extends React.Component<IAddServiceDialogProps> {

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
                    {this.props.locale.addService}
                </DialogTitle>
                <AddServiceForm onSubmit={this.handleSubmit}
                    onCancel={this.handleClose}
                    locale={this.props.locale} />
            </Dialog>
        );
    }
}
