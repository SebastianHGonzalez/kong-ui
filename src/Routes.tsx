import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from 'src/components/Landing/Landing';


export default (
    <Switch>
        <Route key={1} exact={true} path="/" component={Landing} />
    </Switch>
)
