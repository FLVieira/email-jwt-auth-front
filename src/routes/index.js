import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RecoveryPassword from '../pages/RecoveryPassword';
import RecoveryPage from '../pages/RecoveryPage';
import Dashboard from '../pages/Dashboard';
import VerifyAccount from '../pages/VerifyAccount';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/recovery" component={RecoveryPassword} />
      <Route exact path="/recovery/:id" component={RecoveryPage} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/verify/:id" component={VerifyAccount} />
    </Switch>
  );
}
