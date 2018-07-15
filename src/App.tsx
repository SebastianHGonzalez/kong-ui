import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Routes from 'src/Routes';
import configureStore from 'src/store/ConfigureStore';


const App = () => (
  <Provider store={configureStore()}>
    <HashRouter>
      {Routes}
    </HashRouter>
  </Provider>
);

export default App;
