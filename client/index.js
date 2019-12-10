import { render } from 'react-dom';
import React from 'react';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import {} from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import BooksLibrary from './container/books_library';

const app = document.getElementById('root');

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
  cache: new InMemoryCache
});

render(
 <ApolloProvider client={client}>
    <BooksLibrary />
 </ApolloProvider> ,
	app
);