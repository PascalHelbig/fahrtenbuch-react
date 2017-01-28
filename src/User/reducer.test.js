import reducer from './reducer';
import { LOGIN, LOGOUT } from './actions';

it('returns the initialState', () => {
  const initState = reducer(undefined, { type: 'INIT' });
  expect(initState).toEqual({});
});

it('handles login', () => {
  const stateAfterLogin = reducer({}, { type: LOGIN, token: 'theToken' });
  expect(stateAfterLogin).toEqual({ token: 'theToken' });
});

it('sets the state to initialState on logout', () => {
  const stateAfterLogout = reducer({ token: 'toRemoveToken' }, { type: LOGOUT });
  expect(stateAfterLogout).toEqual({});
});
