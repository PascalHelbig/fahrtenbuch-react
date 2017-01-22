import { mapStateToProps } from './index';

it('sets Router isAuth to true, when token is in redux store', () => {
  const reduxStore = { user: { token: 'abcd' } };
  const props = mapStateToProps(reduxStore);

  expect(props.isAuth).toBeTruthy();
});

it('sets Router isAuth to false, when token is not in redux store', () => {
  const reduxStore = { user: {} };
  const props = mapStateToProps(reduxStore);

  expect(props.isAuth).toBeFalsy();
});
