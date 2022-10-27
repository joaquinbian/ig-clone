import {gql} from '@apollo/client';

export const getCommentsByPost = /* GraphQL */ gql`
  query GetCommentsByPost(
    $postID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCommentsByPost(
      postID: $postID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        comment
        numberOfLikes
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

export const onCreateCommentByPostIdSubscription = /* GraphQL */ gql`
  subscription OnCreateCommentByPostId($postID: ID!) {
    onCreateCommentByPostId(postID: $postID) {
      id
      comment
      numberOfLikes
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
            numberOfLikes
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
