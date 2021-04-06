import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink, from } from '@apollo/client';

const getToken = () => {
  return localStorage.getItem('token');
}

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }) => ({ headers: {
      ...headers,
      authorization: `Bearer ${getToken()}`
    }}));
  return forward(operation);
});

const uri = 'https://funded-pet-library.moonhighway.com/';
const link = createHttpLink({
  uri
})

export const client = new ApolloClient({
  link: from([authLink, link]),
  cache: new InMemoryCache()
})
