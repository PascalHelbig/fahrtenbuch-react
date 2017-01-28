import React from 'react';
import { shallow } from 'enzyme';
import FlatButton from 'material-ui/FlatButton';
import { LogoutButtonDump, mapDispatchToProps } from './LogoutButton';

it('should render correctly', () => {
  shallow(<LogoutButtonDump logout={() => {}} />);
});

it('calls props.logout on TouchTap', () => {
  const logout = jest.fn();
  const wrapper = shallow(<LogoutButtonDump logout={logout} />);
  wrapper.find(FlatButton).simulate('touchTap');
  expect(logout).toHaveBeenCalled();
});

it('returns a logout prop on mapDispatchToProps', () => {
  const dispatchMock = () => {};
  const props = mapDispatchToProps(dispatchMock);
  expect(props.logout instanceof Function).toBeTruthy();
});

it('calls the dispatch on mapDispatchToProps.logout', () => {
  window.localStorage = { removeItem: () => {} };

  const dispatchMock = jest.fn();
  const props = mapDispatchToProps(dispatchMock);
  props.logout();
  expect(dispatchMock).toHaveBeenCalled();
});
