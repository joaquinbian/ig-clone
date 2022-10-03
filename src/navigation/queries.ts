import {gql} from '@apollo/client';

export const getUser = /* GraphQL */ gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
    }
  }
`;

export type GetUserQuery = {
  getUser?: {
    __typename: 'User';
    id: string;
    username?: string | null;
  } | null;
};
