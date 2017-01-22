import React from 'react';
import { shallow } from 'enzyme';
import { LoginConnectorDumb, handleLogin } from './LoginConnector';
import Login from './Login';

it('renders Login', () => {
  const wrapper = shallow(<LoginConnectorDumb login={() => {}} loginAction={() => {}} />);
  expect(wrapper.find(Login)).toHaveLength(1);
});

it('runs handleLogin onLogin', () => {
  const props = {
    // reject login, so that loginAction can be ignored for this test:
    login: jest.fn(() => new Promise((resolve, reject) => reject())),
    loginAction: () => {},
  };
  const wrapper = shallow(<LoginConnectorDumb {...props} />);

  wrapper.find(Login).simulate('login', 'email@test.de', 'password');

  expect(props.login).toHaveBeenCalledWith({ variables: { email: 'email@test.de', password: 'password' } });
});

const callHandlelogin = () => {
  const mutationReturnPromise = new Promise(resolve => resolve({ data: { login: { token: 'abcde' } } }));
  const props = {
    login: jest.fn(() => mutationReturnPromise),
    loginAction: jest.fn(),
  };
  return handleLogin(props, 'email@test.de', 'password').then(() => props);
};

it('calls login prop on handleLogin', () =>
  callHandlelogin().then(({ login }) =>
    expect(login).toHaveBeenCalledWith({ variables: { email: 'email@test.de', password: 'password' } }),
  ),
);

it('calls loginAction prop on handleLogin', () =>
  callHandlelogin().then(({ loginAction }) =>
    expect(loginAction).toHaveBeenCalledWith('abcde'),
  ),
);
