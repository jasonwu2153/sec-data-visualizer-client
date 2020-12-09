import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import Home from './screens/Home';
import PopularHoldings from './screens/PopularHoldings';

const history = createBrowserHistory({});

const App = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/popular-holdings" component={PopularHoldings} />
        </Switch>
    </Router>
);

export default App;
