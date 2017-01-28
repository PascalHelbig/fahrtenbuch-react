export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (token) => {
  localStorage.setItem('token', token);
  return {
    type: LOGIN,
    token,
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  return { type: LOGOUT };
};
