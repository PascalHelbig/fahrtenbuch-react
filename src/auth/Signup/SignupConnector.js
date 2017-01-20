import React, { PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Signup from './Signup';

export const SignupConnectorDumb = ({ signup }) => (
  <Signup onSignup={(email, password) => signup({ variables: { email, password } })} />
);

SignupConnectorDumb.propTypes = {
  signup: PropTypes.func.isRequired,
};

const signupMutation = gql`mutation signup($email: Email!, $password: Password!) {
    signup( email: $email, password: $password ) {
        token
    }
}`;

export default graphql(signupMutation, { name: 'signup' })(SignupConnectorDumb);
