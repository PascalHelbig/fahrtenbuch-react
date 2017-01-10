import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import Routes from './Routes/Routes';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: process.env.REACT_APP_BACKEND }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
