import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import userReducer from './User/reducer';
import Routes from './Routes';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: process.env.REACT_APP_BACKEND }),
});

const store = createStore(
  combineReducers({
    user: userReducer,
    apollo: client.reducer(),
  }),
  {}, // initial state
  compose(
    applyMiddleware(client.middleware()),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

ReactDOM.render(
  <ApolloProvider client={client} store={store}>
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
