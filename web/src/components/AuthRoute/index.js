import React from 'react';
import { Route, Redirect, } from 'react-router-dom';

type Props = {
  children: any,
  isAuthenticated: boolean,
  willAuthenticate: boolean,
}


const AuthRoute = ({ children, isAuthenticated, willAuthenticate, ...rest }: Props) => (
  <Route {...rest}
    render={({ location }) => {
      if (isAuthenticated) {
        console.log("isAuthenticated");
        return <Redirect to={{ pathname: "/", state: { from: location } }} />
      }
      if (willAuthenticate) { return null; }
      if (!willAuthenticate && !isAuthenticated) { return children; }
      return null;
    }}
  />
);


export default AuthRoute;
