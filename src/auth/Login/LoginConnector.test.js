import React from 'react';
import { shallow } from 'enzyme';
import { LoginConnectorDumb } from './LoginConnector';
import Login from './Login';

it('renders Login', () => {
  const wrapper = shallow(<LoginConnectorDumb login={() => {}} />);
  expect(wrapper.find(Login)).toHaveLength(1);
});

it('runs login mutation onLogin', () => {
  const login = jest.fn();
  const wrapper = shallow(<LoginConnectorDumb login={login} />);
  wrapper.find(Login).simulate('login', 'email@test.de', 'password');
  expect(login).toHaveBeenCalledWith({ variables: { email: 'email@test.de', password: 'password' } });
});
