import { connect } from 'react-redux';
import Routes from './Routes';

export const mapStateToProps = state => ({
  isAuth: state.user.token !== undefined,
});

export default connect(mapStateToProps)(Routes);
