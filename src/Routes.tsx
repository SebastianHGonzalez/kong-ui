import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';


export const PATH = {
    DASHBOARD: "/dashboard",
    LOGIN: "/login",
    ROOT: "/",
}

export default (
    <Switch>
        <Route exact={true} path={PATH.ROOT} component={Landing} />
        <Route path={PATH.LOGIN} component={Login} />
    </Switch>
)
