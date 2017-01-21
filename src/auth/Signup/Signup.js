import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import Header from '../../Header/Header';
import Form from '../../Form/Form';
import EmailTextField from '../../Form/textField/EmailTextField';
import PasswordTextField from '../../Form/textField/PasswordTextField';

const Signup = props => (
  <div>
    <Header>Sign up</Header>
    <Form>
      {({ email, password }, isValid) => (
        <div>
          <EmailTextField />
          <PasswordTextField />
          <RaisedButton
            label="Registrieren"
            onTouchTap={() => props.onSignup(email, password)}
            disabled={!isValid}
            primary
          />
        </div>
      )}
    </Form>
  </div>
);

/* eslint-disable react/no-unused-prop-types */
Signup.propTypes = {
  onSignup: PropTypes.func.isRequired,
};
/* eslint-disable react/no-unused-prop-types */

export default Signup;
