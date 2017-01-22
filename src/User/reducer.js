import { LOGIN } from './actions';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return { token: action.token, ...state };
    default:
      return state;
  }
};