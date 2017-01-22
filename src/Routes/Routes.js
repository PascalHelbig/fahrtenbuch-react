import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../App';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Me from '../Me';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.requiredAuth = this.requiredAuth.bind(this);
    this.requiredUnauth = this.requiredUnauth.bind(this);
  }

  requiredAuth(nextState, replace) {
    if (!this.props.isAuth) {
      replace('/login');
    }
  }

  requiredUnauth(nextState, replace) {
    if (this.props.isAuth) {
      replace('/');
    }
  }

  render() {
    return (
      // key={Math.random()}: https://github.com/ReactTraining/react-router/issues/2704#issuecomment-256611906
      <Router history={browserHistory} key={Math.random()}>
        <Route path="/" component={App} >
          <IndexRoute component={Me} onEnter={this.requiredAuth} />
          <Route onEnter={this.requiredUnauth}>
            <Route path="login" component={Login} />
            <Route path="signup" component={Signup} />
          </Route>
        </Route>
      </Router>
    );
  }
}

Routes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default Routes;
