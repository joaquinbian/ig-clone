import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';

interface IApolloClientProps {
  children: JSX.Element | JSX.Element[];
}

const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});

const Client = ({children}: IApolloClientProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Client;
