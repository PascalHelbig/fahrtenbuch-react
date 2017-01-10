import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

const App = ({ children }) => (
  <div>
    <AppBar title="Fahrtenbuch" />
    { children }
  </div>
);

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

App.defaultProps = {
  children: '',
};

export default App;
