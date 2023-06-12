import {gql} from '@apollo/client';
import {Post} from 'src/API';

export const getUserById = /* GraphQL */ gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      image
      bio
      username
      website
      numberOfPosts
      numberOfFollowers
      numberOfFollowings
      Posts {
        nextToken
        startedAt
        items {
          id
          image
          images
          video
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
export type GetUserQueryById = {
  getUser?: {
    __typename: 'User';
    id: string;
    name: string;
    image?: string | null;
    bio?: string | null;
    username?: string | null;
    website?: string | null;
    email: string;
    numberOfPosts: number;
    numberOfFollowers: number;
    numberOfFollowings: number;
    Posts?: {
      __typename: 'ModelPostConnection';
      nextToken?: string | null;
      startedAt?: number | null;
      items: Post[];
    } | null;

    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export const createUserFollow = /* GraphQL */ gql`
  mutation CreateUserFollow(
    $input: CreateUserFollowInput!
    $condition: ModelUserFollowConditionInput
  ) {
    createUserFollow(input: $input, condition: $condition) {
      id
      followerID
      followeeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
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
export const deleteUserFollow = /* GraphQL */ gql`
  mutation DeleteUserFollow(
    $input: DeleteUserFollowInput!
    $condition: ModelUserFollowConditionInput
  ) {
    deleteUserFollow(input: $input, condition: $condition) {
      id
      followerID
      followeeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
