import { Dialog, DialogTitle } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

import RouteForm from 'src/components/Dashboard/routes/RouteForm';
import { IStoreState } from 'src/store/InitialState';
import { IRoute, IRouteOptions } from 'src/STSO/api/Route';
import Locale from 'src/STSO/locale/Locale';


interface IRouteDialogProps extends React.Props<any> {
    route?: IRoute;
    open: boolean;
    locale: Locale;
    onClose: (data?: IRouteOptions) => void;
}

export const RouteDialog = ({ open, route, locale, onClose }: IRouteDialogProps) =>
    <Dialog open={open} onClose={onClose as any}>
        <DialogTitle>{`${route ? locale.edit : locale.add} ${locale.route}`}</DialogTitle>
        <RouteForm onSubmit={onClose}
            route={route}
            onCancel={onClose} />
    </Dialog>

function mapStateToProps({ locale }: IStoreState) {
    return {
        locale,
    };
}

export default connect(mapStateToProps)(RouteDialog);
