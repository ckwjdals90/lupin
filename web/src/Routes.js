import React, { Component }from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticate, unauthenticate } from './actions/session';

import { Home, Login, Signup, } from './containers';
import { AuthRoute, PrivateRoute, NotFound } from './components';

type Props = {
  authenticate: () => void,
  unauthenticate: () => void,
  isAuthenticated: boolean,
  willAuthenticate: boolean,
}

class Routes extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      this.props.authenticate();
    } else {
      this.props.unauthenticate();
    }
  }

  props: Props

  render() {
    const { isAuthenticated, willAuthenticate } = this.props;
    const authProps = { isAuthenticated, willAuthenticate };

    return (
      <React.Fragment>
        <Router>
          <div style={{ display: 'flex', flex: '1' }}>
            <Switch>
              <PrivateRoute exact path="/" {...authProps}>
                <Home />
              </PrivateRoute>
              <AuthRoute path="/login" {...authProps}><Login /></AuthRoute>
              <AuthRoute path="/signup" {...authProps}><Signup /></AuthRoute>
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    isAuthenticated: state.session.isAuthenticated,
    willAuthenticate: state.session.willAuthenticate,
  }),
  { authenticate, unauthenticate }
)(Routes);
