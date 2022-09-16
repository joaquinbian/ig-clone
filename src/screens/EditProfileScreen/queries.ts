import {gql} from '@apollo/client';

export const getUserToEditById = /* GraphQL */ gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      image
      bio
      username
      website
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const editUser = /* GraphQL */ gql`
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      image
      bio
      username
      website
      email
      numberOfPosts
      numberOfFollowers
      numberOfFollowings

      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
