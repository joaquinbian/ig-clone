import {gql} from '@apollo/client';

export const updatePost = /* GraphQL */ gql`
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      description
      image
      images
      video
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const getPost = /* GraphQL */ gql`
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      description
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
