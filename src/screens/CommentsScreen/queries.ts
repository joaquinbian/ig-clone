import {gql} from '@apollo/client';

export const getCommentsByPost = /* GraphQL */ gql`
  query GetCommentsByPost(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCommentsByPost(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        comment
        userID
        postID
        User {
          id
          name
          image
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const createComment = /* GraphQL */ gql`
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      comment
      userID
      postID
      User {
        id
        name
        image
        username
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Post {
        id
        Comments {
          items {
            id
            comment
            _deleted
            User {
              id
              username
            }
          }
        }
      }
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
