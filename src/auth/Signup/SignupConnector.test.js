import React from 'react';
import { shallow } from 'enzyme';
import { SignupConnectorDumb } from './SignupConnector';
import Signup from './Signup';

it('renders Signup', () => {
  const wrapper = shallow(<SignupConnectorDumb signup={() => {}} />);
  expect(wrapper.find(Signup)).toHaveLength(1);
});

it('runs signup mutation onSignup', () => {
  const signup = jest.fn();
  const wrapper = shallow(<SignupConnectorDumb signup={signup} />);
  wrapper.find(Signup).simulate('signup', 'email@test.de', 'password');
  expect(signup).toHaveBeenCalledWith({ variables: { email: 'email@test.de', password: 'password' } });
});
