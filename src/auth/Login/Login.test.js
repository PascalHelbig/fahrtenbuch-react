import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import Login from './Login';
import Form from '../../Form/Form';

it('renders correctly', () => {
  const wrapper = shallow(<Login onLogin={() => {}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('runs login on button touchTap', () => {
  const onLogin = jest.fn();
  const form = shallow(<Login onLogin={onLogin} />).find(Form).shallow();

  form.find(RaisedButton).simulate('touchTap');

  expect(onLogin).toHaveBeenCalled();
});
