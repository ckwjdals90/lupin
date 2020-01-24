import React from 'react';
import { Route, Redirect, } from 'react-router-dom';

type Props = {
  children: any,
  isAuthenticated: boolean,
  willAuthenticate: boolean,
}

const PrivateRoute = ({ children, isAuthenticated, willAuthenticate, ...rest }: Props) => (
  <Route {...rest}
  render={({ location }) => {
      if (isAuthenticated) { return children; }
      if (willAuthenticate) { return null; }
      if (!willAuthenticate && !isAuthenticated) {
        return <Redirect to={{ pathname: "/login", state: { from: location } }} />
      }
      return null;
    }}
  />
);


export default PrivateRoute;
