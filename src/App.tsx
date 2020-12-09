import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import Home from './screens/Home';

const history = createBrowserHistory({})

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)

export default App;
