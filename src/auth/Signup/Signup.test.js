import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import Formsy from 'formsy-react';
import Signup from './Signup';

it('renders correctly', () => {
  const wrapper = shallow(<Signup onSignup={() => {}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('runs signup on button touchTap', () => {
  const onSignup = jest.fn();
  const wrapper = shallow(<Signup onSignup={onSignup} />);
  wrapper.find(RaisedButton).simulate('touchTap');
  expect(onSignup).toHaveBeenCalled();
});

it('enable button on valid form', () => {
  const wrapper = shallow(<Signup onSignup={() => {}} />);
  wrapper.setState({ isValid: true });

  const signupButton = wrapper.find(RaisedButton);
  expect(signupButton.prop('disabled')).toBeFalsy();
});

it('disable button on invalid from', () => {
  const wrapper = shallow(<Signup onSignup={() => {}} />);
  wrapper.setState({ isValid: false });

  const signupButton = wrapper.find(RaisedButton);
  expect(signupButton.prop('disabled')).toBeTruthy();
});

it('saves changes in state', () => {
  const wrapper = shallow(<Signup onSignup={() => {}} />);
  wrapper.instance().handleChange({ email: 'test@test.de' });

  expect(wrapper.state('values')).toEqual({ email: 'test@test.de' });
});

it('set isValid state to true, when form calls onValid()', () => {
  const wrapper = shallow(<Signup onSignup={() => {}} />);
  const form = wrapper.find(Formsy.Form);

  wrapper.setState({ isValid: false });
  form.simulate('valid');

  expect(wrapper.state('isValid')).toBeTruthy();
});

it('set isValid state to false, when form calls onInvalid()', () => {
  const wrapper = shallow(<Signup onSignup={() => {}} />);
  const form = wrapper.find(Formsy.Form);

  wrapper.setState({ isValid: true });
  form.simulate('invalid');

  expect(wrapper.state('isValid')).toBeFalsy();
});