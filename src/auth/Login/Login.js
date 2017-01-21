import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import Form from '../../Form/Form';
import EmailTextField from '../../Form/textField/EmailTextField';
import PasswordTextField from '../../Form/textField/PasswordTextField';
import Header from '../../Header/Header';

const Login = props => (
  <div>
    <Header>Login</Header>
    <Form>
      {({ email, password }, isValid) => (
        <div>
          <EmailTextField />
          <PasswordTextField />
          <RaisedButton
            label="login"
            onTouchTap={() => props.onLogin(email, password)}
            disabled={!isValid}
            primary
          />
        </div>
      )}
    </Form>
  </div>
);

/* eslint-disable react/no-unused-prop-types */
Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
/* eslint-enable react/no-unused-prop-types */

export default Login;
