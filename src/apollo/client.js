import { ApolloClient } from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import introspectionQueryResultData from './fragmentTypes.json';
import SETTINGS from '../settings'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });
const link = new HttpLink({
  uri: `${SETTINGS.host}/graphql`
});

const client = new ApolloClient({
  cache,
  link
});

export default client;