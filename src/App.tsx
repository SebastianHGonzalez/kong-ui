import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Routes from './Routes';
import configureStore from './store/ConfigureStore';


const App = () => (
  <Provider store={configureStore()}>
    <HashRouter>
      {Routes}
    </HashRouter>
  </Provider>
);

export default App;
