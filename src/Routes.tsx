import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from 'src/components/Dashboard/Dashboard';
import Landing from 'src/components/Landing/Landing';
import Login from 'src/components/Login/Login';


export const PATH = {
    DASHBOARD: "/dashboard",
    LOGIN: "/login",
    ROOT: "/",
}

export default (
    <Switch>
        <Route exact={true} path={PATH.ROOT} component={Landing} />
        <Route path={PATH.LOGIN} component={Login} />
        <Route path={PATH.DASHBOARD} component={Dashboard} />
   </Switch>
)
