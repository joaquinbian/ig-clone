import {gql} from '@apollo/client';

export const listPosts = /* GraphQL */ gql`
  query GetPostsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
