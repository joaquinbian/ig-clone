import {gql} from '@apollo/client';

export const getCommentsByPost = gql`
  query GetCommentsByPost($postID: ID!) {
    getCommentsByPost(postID: $postID) {
      nextToken
      startedAt
      items {
        _deleted
        _version
        comment
        createdAt
        id
        updatedAt
        User {
          _version
          bio
          id
          username
        }
      }
    }
  }
`;
