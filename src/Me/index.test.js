import React from 'react';
import { shallow } from 'enzyme';
import Me from './index';

it('renders without crashing', () => {
  shallow(<Me />);
});
