import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import LoginButton from './LoginButton';

const App = ({ children, router }) => (
  <div>
    <AppBar
      title="Fahrtenbuch"
      iconElementRight={<LoginButton router={router} />}
    />
    { children }
  </div>
);

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  ...LoginButton.propTypes,
};

App.defaultProps = {
  children: '',
};

export default App;
