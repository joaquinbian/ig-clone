import {gql} from '@apollo/client';

export const listPosts = /* GraphQL */ gql`
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        video
        image
        images
        numberOfComments
        numberOfLikes
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        User {
          id
          name
          username
          image
        }
        Comments(limit: 1) {
          items {
            id
            comment
            _deleted
            User {
              username
            }
          }
        }
        Likes {
          items {
            _deleted
            id
            User {
              name
              id
              username
            }
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
