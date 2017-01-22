import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './index';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

it('renders without crashing', () => {
  const div = document.createElement('div');
  // Wrapp into MuiThemeProvider, because App needs the theme context
  ReactDOM.render(
    <MuiThemeProvider>
      <App router={{ push: () => {} }} />
    </MuiThemeProvider>,
    div);
});
