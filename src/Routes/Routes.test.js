import React from 'react';
import { shallow } from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './Routes';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

it('renders without crashing', () => {
  shallow(<Routes isAuth />);
});

it('redirects when auth is true and unauth required to "/"', () => {
  const wrapper = shallow(<Routes isAuth />).instance();

  const shouldRedirect = jest.fn();
  const notRedirect = jest.fn();
  wrapper.requiredAuth(undefined, notRedirect);
  wrapper.requiredUnauth(undefined, shouldRedirect);

  expect(shouldRedirect).toHaveBeenCalledWith('/');
  expect(notRedirect).toHaveBeenCalledTimes(0);
});

it('redirects when auth is false and auth required to "/login"', () => {
  const wrapper = shallow(<Routes isAuth={false} />).instance();

  const shouldRedirect = jest.fn();
  const notRedirect = jest.fn();
  wrapper.requiredAuth(undefined, shouldRedirect);
  wrapper.requiredUnauth(undefined, notRedirect);

  expect(shouldRedirect).toHaveBeenCalledWith('/login');
  expect(notRedirect).toHaveBeenCalledTimes(0);
});
