import React from 'react';
import FlatButton from 'material-ui/FlatButton';

// Todo: add onTouchTap logic
const LogoutButton = props => (
  <FlatButton
    label="logout"
    {...props}
  />
);

LogoutButton.muiName = FlatButton.muiName;

export default LogoutButton;
