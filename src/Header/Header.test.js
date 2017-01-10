import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders h2', () => {
  const wrapper = shallow(<Header>Title</Header>);
  expect(wrapper.find('h2')).toHaveLength(1);
});

it('renders children', () => {
  const wrapper = shallow(<Header>Title</Header>);
  expect(wrapper.children().text()).toBe('Title');
});
