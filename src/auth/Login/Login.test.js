import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import Login from './Login';

it('renders correctly', () => {
  const wrapper = shallow(<Login onLogin={() => {}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('runs login on button touchTap', () => {
  const onLogin = jest.fn();
  const wrapper = shallow(<Login onLogin={onLogin} />);
  wrapper.find(RaisedButton).simulate('touchTap');
  expect(onLogin).toHaveBeenCalled();
});

it('enable button on valid form', () => {
  const wrapper = shallow(<Login onLogin={() => {}} />);
  wrapper.setState({ isValid: true });

  const loginButton = wrapper.find(RaisedButton);
  expect(loginButton.prop('disabled')).toBeFalsy();
});

it('disable button on invalid form', () => {
  const wrapper = shallow(<Login onLogin={() => {}} />);
  wrapper.setState({ isValid: false });

  const loginButton = wrapper.find(RaisedButton);
  expect(loginButton.prop('disabled')).toBeTruthy();
});
