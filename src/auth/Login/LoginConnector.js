import React, { PropTypes } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { login as loginAction } from '../../User/actions';
import Login from './Login';

export const handleLogin = (props, email, password) =>
  props.login({ variables: { email, password } }).then(res =>
    props.loginAction(res.data.login.token),
  );

export const LoginConnectorDumb = props => (
  <Login
    onLogin={(email, password) => handleLogin(props, email, password)}
  />
);

/* eslint-disable react/no-unused-prop-types */
LoginConnectorDumb.propTypes = {
  login: PropTypes.func.isRequired,
  loginAction: PropTypes.func.isRequired,
};
/* eslint-enable */

const loginMutation = gql`mutation login($email: Email!, $password: Password!) {
  login( email: $email, password: $password) {
    token
  }
}`;

export default connect(null, ({ loginAction }))(
  graphql(loginMutation, { name: 'login' })(
    LoginConnectorDumb,
  ),
);
