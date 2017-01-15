import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import PasswordTextField from './PasswordTextField';

it('render correctly', () => {
  const wrapper = shallow(<PasswordTextField />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
