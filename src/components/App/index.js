import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import PasswordForget from '../PasswordForget';
import Home from '../Home';
import Account from '../Account';
import Admin from '../Admin';

import * as ROUTES from '../../constants/routes';
import PrivateRoute from '../../ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Navigation />
      <hr />
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
        <PrivateRoute path={ROUTES.HOME} component={Home} />
        <PrivateRoute path={ROUTES.ACCOUNT} component={Account} />
        <PrivateRoute path={ROUTES.ADMIN} component={Admin} />
      </Switch>
    </Router>
  );
};

export default App;
