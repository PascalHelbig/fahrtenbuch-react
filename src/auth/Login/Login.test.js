import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from './Login';

it('renders correctly', () => {
  const wrapper = shallow(<Login />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
