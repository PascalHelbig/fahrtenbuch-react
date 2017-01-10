import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Signup from './Signup';

it('renders correctly', () => {
  const wrapper = shallow(<Signup />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
