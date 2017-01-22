import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const LoginButton = (props) => {
  // https://fb.me/react-unknown-prop
  // eslint-disable-next-line no-unused-vars
  const { router, ...restProps } = props;
  return (
    <FlatButton
      label="login"
      onTouchTap={() => props.router.push('/login')}
      {...restProps}
    />
  );
};

LoginButton.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

LoginButton.muiName = FlatButton.muiName;

export default LoginButton;
