import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  createHttpLink,
  TypePolicies,
} from '@apollo/client';
import {useAuthContext} from '@context/AuthContext';
import {createAuthLink, AuthOptions, AUTH_TYPE} from 'aws-appsync-auth-link';
import {createSubscriptionHandshakeLink} from 'aws-appsync-subscription-link';
import {useMemo} from 'react';

import config from 'src/aws-exports';

interface IApolloClientProps {
  children: JSX.Element | JSX.Element[];
}

const url = config.aws_appsync_graphqlEndpoint;

const region = config.aws_appsync_region;

const httpLink = createHttpLink({uri: url});

const typePolicies: TypePolicies = {
  Query: {
    fields: {
      getCommentsByPost: {
        keyArgs: ['postID', 'createdAt', 'sortDirection', 'filter'],
        merge: (existing = {}, incoming, {args, variables}) => {
          if (existing.nextToken === incoming.nextToken) {
            return {
              ...existing,
              ...incoming,
              items: [...incoming.items, ...(existing.items ?? [])],
            };
          }

          return {
            ...existing,
            ...incoming,
            items: [...(existing?.items ?? []), ...incoming.items],
          };
        },
      },
      getPostsByDate: {
        keyArgs: ['type', 'createdAt', 'sortDirection', 'filter'],
        merge: (existing = {}, incoming) => {
          // console.log({existing, incoming});

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

const Client = ({children}: IApolloClientProps) => {
  const {user} = useAuthContext();
  const client = useMemo(() => {
    const jwtToken =
      user?.getSignInUserSession()?.getAccessToken().getJwtToken() ?? '';
    const auth: AuthOptions = {
      type: config.aws_appsync_authenticationType as AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
      jwtToken,
    };

    const link = ApolloLink.from([
      createAuthLink({url, region, auth}),
      createSubscriptionHandshakeLink({url, region, auth}, httpLink),
    ]);

    return new ApolloClient({
      link,
      cache: new InMemoryCache({typePolicies}),
    });
  }, [user]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Client;
