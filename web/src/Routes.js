import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Home, Login, Signup, } from './containers';
import { NotFound } from './components';

const Routes = () => (
  <React.Fragment>
    <Router>
      <div style={{ display: 'flex', flex: '1' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </React.Fragment>
)

export default Routes;
