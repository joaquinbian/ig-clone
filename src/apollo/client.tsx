import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  createHttpLink,
  TypePolicies,
} from '@apollo/client';
import {createAuthLink, AuthOptions, AUTH_TYPE} from 'aws-appsync-auth-link';
import {createSubscriptionHandshakeLink} from 'aws-appsync-subscription-link';

import config from 'src/aws-exports';

interface IApolloClientProps {
  children: JSX.Element | JSX.Element[];
}

const url = config.aws_appsync_graphqlEndpoint;

const region = config.aws_appsync_region;

const auth: AuthOptions = {
  type: config.aws_appsync_authenticationType as AUTH_TYPE.API_KEY,
  apiKey: config.aws_appsync_apiKey,
};

const httpLink = createHttpLink({uri: url});

const link = ApolloLink.from([
  createAuthLink({url, region, auth}),
  createSubscriptionHandshakeLink({url, region, auth}, httpLink),
]);

const typePolicies: TypePolicies = {
  Query: {
    fields: {
      getCommentsByPost: {
        keyArgs: ['postID', 'createdAt', 'sortDirection', 'filter'],
        merge: (existing = {}, incoming) => {
          console.log({existing, incoming});

          return {
            ...existing,
            ...incoming,
            items: [...(existing?.items ?? []), ...incoming.items],
          };
        },
      },
    },
  },
};

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({typePolicies}),
});

const Client = ({children}: IApolloClientProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Client;
