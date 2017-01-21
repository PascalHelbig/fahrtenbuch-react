import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import Form from '../../Form/Form';
import Signup from './Signup';

it('renders correctly', () => {
  const wrapper = shallow(<Signup onSignup={() => {}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('runs signup on button touchTap', () => {
  const onSignup = jest.fn();
  const form = shallow(<Signup onSignup={onSignup} />).find(Form).shallow();

  form.find(RaisedButton).simulate('touchTap');

  expect(onSignup).toHaveBeenCalled();
})