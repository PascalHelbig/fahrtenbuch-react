import { mapStateToProps } from './IsAuth';

it('sets isAuth to true, when token is given in state', () => {
  const state = {
    user: { token: 'theToken' },
  };
  const props = mapStateToProps(state);
  expect(props).toEqual({ isAuth: true });
});

it('sets isAuth to false, when token is not given in state', () => {
  const state = { user: { } };
  const props = mapStateToProps(state);
  expect(props).toEqual({ isAuth: false });
});
