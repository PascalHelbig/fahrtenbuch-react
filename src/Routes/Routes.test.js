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

  const redirect = jest.fn();
  wrapper.requiredUnauth(undefined, redirect);

  expect(redirect).toHaveBeenCalledWith('/');
});

it('redirects when auth is false and auth required to "/login"', () => {
  const wrapper = shallow(<Routes isAuth={false} />).instance();

  const redirect = jest.fn();
  wrapper.requiredAuth(undefined, redirect);

  expect(redirect).toHaveBeenCalledWith('/login');
});
