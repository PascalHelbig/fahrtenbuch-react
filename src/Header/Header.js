import React, { PropTypes } from 'react';

const style = {
  fontWeight: 400,
  borderBottom: '1px solid #eee',
};

const Header = ({ children }) => (
  <h2 style={style}>{children}</h2>
);

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;
