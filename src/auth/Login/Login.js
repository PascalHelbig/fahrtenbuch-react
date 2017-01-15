import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import Formsy from 'formsy-react';
import EmailTextField from '../../textField/EmailTextField';
import PasswordTextField from '../../textField/PasswordTextField';
import Header from '../../Header/Header';

const Login = ({ onLogin }) => (
  <div>
    <Header>Login</Header>
    <Formsy.Form>
      <EmailTextField />
      <PasswordTextField />
    </Formsy.Form>
    <RaisedButton
      label="login"
      onTouchTap={() => onLogin('test@test.de', '12345')}
      primary
    />
  </div>
);

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
