import { login, logout, LOGIN, LOGOUT } from './actions';

window.localStorage = { setItem: jest.fn(), removeItem: jest.fn() };

describe('login', () => {
  it('saves the token in localStorage', () => {
    login('theToken');
    expect(window.localStorage.setItem).toHaveBeenCalledWith('token', 'theToken');
  });

  it('returns the correct action', () =>
    expect(login('theToken')).toEqual({ type: LOGIN, token: 'theToken' }),
  );
});

describe('logout', () => {
  it('returns the LOGOUT type', () =>
    expect(logout()).toEqual({ type: LOGOUT }),
  );

  it('removes the token from localStorage', () => {
    logout();
    expect(window.localStorage.removeItem).toHaveBeenCalledWith('token');
  });
});
