import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import Header from '../../Header/Header';

const Login = ({ onLogin }) => (
  <div>
    <Header>Login</Header>
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
