import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { HOME_ROUTE } from '../constants';
import checkLoginStatus from '../helpers/checkLoginStatus';

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkLoginStatus() ? (
        <Redirect
          to={{
            pathname: HOME_ROUTE ,
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default LoginRoute;