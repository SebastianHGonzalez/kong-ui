import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Landing from 'src/components/Landing/Landing';
import configureStore from 'src/store/ConfigureStore';


const App = () => (
  <Provider store={configureStore()}>
    <HashRouter>
      <Switch>
        <Route exact={true} path="/" component={Landing} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default App;
