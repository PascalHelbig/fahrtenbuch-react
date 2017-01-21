import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import EmailTextField from './EmailTextField';

it('renders correctly', () => {
  const wrapper = shallow(<EmailTextField />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
