import React, { PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Login from './Login';

export const LoginConnectorDumb = ({ login }) => (
  <Login
    onLogin={(email, password) => login({ variables: { email, password } })}
  />
);

LoginConnectorDumb.propTypes = {
  login: PropTypes.func.isRequired,
};

const loginMutation = gql`mutation login($email: Email!, $password: Password!) {
  login( email: $email, password: $password) {
    token
  }
}`;

export default graphql(loginMutation, { name: 'login' })(LoginConnectorDumb);
