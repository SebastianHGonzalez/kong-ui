import { Dialog, DialogTitle } from "@material-ui/core";
import * as React from 'react';
import { connect } from "react-redux";

import ServiceForm from "src/components/Dashboard/services/ServiceForm";
import { IStoreState } from "src/store/InitialState";
import { IService, IServiceOptions } from "src/STSO/api/Service";
import ILocale from "src/STSO/locale/Locale";


export interface IServiceDialogProps extends React.Props<any> {
    service?: IService;
    open: boolean;
    locale: ILocale;
    onClose: (data?: IServiceOptions) => void;
}

export const ServiceDialog = ({ open, service, locale, onClose }: IServiceDialogProps) =>
    <Dialog open={open} onClose={handleClose(onClose)}>
        <DialogTitle>{`${service ? locale.common.edit : locale.common.add} ${locale.common.service}`}</DialogTitle>
        <ServiceForm onSubmit={onClose}
            service={service}
            onCancel={onClose} />
    </Dialog>

function mapStateToProps({ locale }: IStoreState) {
    return {
        locale,
    };
}

export default connect(mapStateToProps)(ServiceDialog);

function handleClose(onClose: (data?: IServiceOptions | undefined) => void): ((event: React.SyntheticEvent<{}>) => void) | undefined {
    return () => onClose();
}
