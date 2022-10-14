import {gql} from '@apollo/client';

export const deleteComment = /* GraphQL */ gql`
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const updatePost = /* GraphQL */ gql`
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      numberOfComments
      userID
      untitledfield
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
      numberOfComments
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
