import { Dialog, DialogTitle } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import RouteForm from 'src/components/Dashboard/routes/RouteForm';
import { IStoreState } from 'src/store/InitialState';
import { IRoute, IRouteOptions } from 'src/STSO/api/Route';
import ILocale from 'src/STSO/locale/Locale';


interface IRouteDialogProps extends React.Props<any> {
    route?: IRoute;
    open: boolean;
    locale: ILocale;
    onClose: (data?: IRouteOptions) => void;
}

export const RouteDialog = ({ open, route, locale, onClose }: IRouteDialogProps) =>
    <Dialog open={open} onClose={handleClose(onClose)}>
        <DialogTitle>{`${route ? locale.common.edit : locale.common.add} ${locale.common.route}`}</DialogTitle>
        <RouteForm onSubmit={onClose}
            route={route} />
    </Dialog>

function handleClose(onClose: (data?: IRouteOptions | undefined) => void): ((event: React.SyntheticEvent<{}>) => void) | undefined {
    return () => onClose();
}

function mapStateToProps({ locale }: IStoreState) {
    return {
        locale,
    };
}

export default connect(mapStateToProps)(RouteDialog);
