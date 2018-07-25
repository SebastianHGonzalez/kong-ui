import { Dialog, DialogTitle } from "@material-ui/core";
import * as React from 'react';
import { connect } from "react-redux";

import { IStoreState } from "src/store/InitialState";
import { IService } from "src/STSO/KongAdminApi";
import Locale from "src/STSO/locale/Locale";


export interface IEditServiceDialogProps extends React.Props<any> {
    service: IService;
    open: boolean;
    locale: Locale;
    onClose: () => void;
}

export const EditServiceDialog = ({ open, service, locale, onClose }: IEditServiceDialogProps) =>
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>{`${locale.edit} ${locale.service}`}</DialogTitle>
    </ Dialog>

function mapStateToProps({ locale }: IStoreState) {
    return {
        locale,
    };
}

export default connect(mapStateToProps)(EditServiceDialog);
