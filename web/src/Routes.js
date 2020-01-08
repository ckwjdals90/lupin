import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import NotFound from './components/NotFound';


const Routes = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
  </React.Fragment>
)

export default Routes;
