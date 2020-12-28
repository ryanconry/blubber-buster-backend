import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  InMemoryCache,
  DefaultOptions 
} from '@apollo/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Remove caching fetches so that different exercises can be retrieved
// https://www.apollographql.com/docs/react/api/core/ApolloClient/#example-defaultoptions-object
const defaultOptions: DefaultOptions  = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

// Initialize ApolloClient
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  // For development
  // uri: 'http://localhost:4000/graphql',
  uri: '/graphql',
  defaultOptions
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
