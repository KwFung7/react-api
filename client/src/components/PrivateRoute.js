import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_ROUTE } from '../constants';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: LOGIN_ROUTE ,
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;