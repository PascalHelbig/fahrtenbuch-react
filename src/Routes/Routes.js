import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../App';
import Login from '../auth/Login';
import Signup from '../auth/Signup/Signup';

export default () =>
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>;

