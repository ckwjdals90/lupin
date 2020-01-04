import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import NotFound from './NotFound';


const App = () => (
  <React.Fragment>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
</React.Fragment>
)

export default App;
