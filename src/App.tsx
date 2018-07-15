import * as React from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';
import Landing from 'src/components/Landing/Landing';

class App extends React.Component {
  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Landing} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
