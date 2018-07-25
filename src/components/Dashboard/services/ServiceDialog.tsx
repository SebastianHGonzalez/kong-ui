import { Dialog, DialogTitle } from "@material-ui/core";
import * as React from 'react';
import { connect } from "react-redux";

import ServiceForm from "src/components/Dashboard/services/ServiceForm";
import { IStoreState } from "src/store/InitialState";
import { IService, IServiceOptions } from "src/STSO/api/Service";
import Locale from "src/STSO/locale/Locale";


export interface IServiceDialogProps extends React.Props<any> {
    service?: IService;
    open: boolean;
    locale: Locale;
    onClose: (data?: IServiceOptions) => void;
}

export const ServiceDialog = ({ open, service, locale, onClose }: IServiceDialogProps) =>
    <Dialog open={open} onClose={onClose as any}>
        <DialogTitle>{`${service? locale.edit : locale.add} ${locale.service}`}</DialogTitle>
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
