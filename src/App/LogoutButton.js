import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { logout as logoutAction } from '../User/actions';

export const LogoutButtonDump = ({ logout, ...restProps }) => (
  <FlatButton
    label="logout"
    onTouchTap={() => logout()}
    {...restProps}
  />
);

LogoutButtonDump.propTypes = {
  logout: PropTypes.func.isRequired,
};

LogoutButtonDump.muiName = FlatButton.muiName;

export const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(null, mapDispatchToProps)(LogoutButtonDump);
