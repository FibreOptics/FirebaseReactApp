import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../constants/routes';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthUserContext);
  const {
    authState: { authUser },
  } = authContext;
  return (
    <Route
      {...rest}
      render={props =>
        authUser === null ? <Redirect to={ROUTES.SIGN_IN} /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
