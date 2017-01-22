import { login, LOGIN } from './actions';

window.localStorage = { setItem: jest.fn() };

it('saves the token in localStorage', () => {
  login('theToken');
  expect(window.localStorage.setItem).toHaveBeenCalledWith('token', 'theToken');
});

it('returns the correct action', () =>
  expect(login('theToken')).toEqual({ type: LOGIN, token: 'theToken' }),
);
