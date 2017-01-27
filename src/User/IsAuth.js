import { connect } from 'react-redux';

export const mapStateToProps = state => ({
  isAuth: state.user.token !== undefined,
});

export default wrapper => connect(mapStateToProps)(wrapper);
