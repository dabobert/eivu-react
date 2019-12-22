import { ApolloClient } from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import introspectionQueryResultData from './fragmentTypes.json';


const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });
const link = new HttpLink({
  uri: 'http://localhost:3000/graphql'
});

const client = new ApolloClient({
  cache,
  link
});

export default client;