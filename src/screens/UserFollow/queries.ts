import {gql} from '@apollo/client';

export const userFollowers = /* GraphQL */ gql`
  query UserFollowers(
    $followeeID: ID!
    $followerID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFollowers(
      followeeID: $followeeID
      followerID: $followerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        followerID
        followeeID
        Follower {
          id
          name
          image
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;

export const userFollowings = /* GraphQL */ gql`
  query UserFollowings(
    $followerID: ID!
    $followeeID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFollowings(
      followerID: $followerID
      followeeID: $followeeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        followerID
        followeeID
        Followee {
          id
          name
          image
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
