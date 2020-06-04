import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import VerifyAccount from '../pages/VerifyAccount';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/verify/:id" component={VerifyAccount} />
    </Switch>
  );
}
