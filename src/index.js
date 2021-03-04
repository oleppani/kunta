import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split, gql } from '@apollo/client'
import { setContext } from 'apollo-link-context'

import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/link-ws'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom"
//import * as serviceWorker from './serviceWorker'
import {I18nextProvider} from "react-i18next"
import i18next from "i18next"
import common_en from "./translations/en/common.json"
import common_fi from "./translations/fi/common.json"
import common_sv from "./translations/sv/common.json"

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'fi',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      fi: {
          common: common_fi
      },
      sv: {
        common: common_sv
    },
  },
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('daas-user-token')
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null,
    }
  }
})

/*
const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
})


const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/graphql',
  options: {
    reconnect: true
  }
})
*/ 

 
const httpLink = new HttpLink({
  uri: 'https://daasback.herokuapp.com',
})


const wsLink = new WebSocketLink({
  uri: 'ws://daasback.herokuapp.com/graphql',
  options: {
    reconnect: true
  }
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink),
)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
})
ReactDOM.render(
  <ApolloProvider client={client}>
    <I18nextProvider i18n={i18next}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </I18nextProvider>
  </ApolloProvider>, 
  document.getElementById('root')
)
/**
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
 */