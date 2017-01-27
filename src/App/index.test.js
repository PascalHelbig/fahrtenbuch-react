import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { shallow } from 'enzyme';
import { AppDump } from './index';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

it('renders without crashing', () => {
  const div = document.createElement('div');
  // Wrapp into MuiThemeProvider, because App needs the theme context
  ReactDOM.render(
    <MuiThemeProvider>
      <AppDump router={{ push: () => {} }} isAuth />
    </MuiThemeProvider>,
    div);
});

const getAction = (app) => {
  const appBar = app.find(AppBar);
  const elementRight = appBar.prop('iconElementRight');
  return elementRight.type;
};

it('renders LogoutButton when isAuth is true', () => {
  const wrapper = shallow(<AppDump router={{ push: () => {} }} isAuth />);
  expect(getAction(wrapper)).toEqual(LogoutButton);
});


it('renders LoginButton when isAuth is false', () => {
  const wrapper = shallow(<AppDump router={{ push: () => {} }} isAuth={false} />);
  expect(getAction(wrapper)).toEqual(LoginButton);
});
