import React from 'react';
import { shallow } from 'enzyme';
import LoginButton from './LoginButton';

it('should render correctly', () => {
  const router = { push: () => {} };
  shallow(<LoginButton router={router} />);
});

it('redirect onTouchTap to /login', () => {
  const router = { push: jest.fn() };
  const button = shallow(<LoginButton router={router} />);

  button.simulate('touchTap');

  expect(router.push).toHaveBeenLastCalledWith('/login');
});
