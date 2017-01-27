import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import IsAuth from '../User/IsAuth';

export const AppDump = ({ children, router, isAuth }) => {
  const loginButton = <LoginButton router={router} />;
  const logoutButton = <LogoutButton />;

  return (
    <div>
      <AppBar
        title="Fahrtenbuch"
        iconElementRight={isAuth ? logoutButton : loginButton}
      />
      { children }
    </div>
  );
};

AppDump.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isAuth: PropTypes.bool.isRequired,
  ...LogoutButton.propTypes,
};

AppDump.defaultProps = {
  children: '',
};

export default IsAuth(AppDump);
