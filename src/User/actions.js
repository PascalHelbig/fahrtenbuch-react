export const LOGIN = 'LOGIN';

export const login = (token) => {
  localStorage.setItem('token', token);
  return {
    type: LOGIN,
    token,
  };
};
