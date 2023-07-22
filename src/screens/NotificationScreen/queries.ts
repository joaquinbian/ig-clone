import {gql} from '@apollo/client';

export const userNotifications = /* GraphQL */ gql`
  query UserNotifications(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userNotifications(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        userID
        actorID
        User {
          id
          name
          image
          bio
          username
          website
          numberOfPosts
          numberOfFollowers
          numberOfFollowings
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Actor {
          id
          name
          image
          bio
          username
          website
          numberOfPosts
          numberOfFollowers
          numberOfFollowings
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Post {
          id
          description
          createdAt
          type
          location
          image
          images
          video
          numberOfComments
          numberOfLikes
          userID
          untitledfield
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        readAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        notificationPostId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const updateNotification = /* GraphQL */ gql`
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      type
      createdAt
      userID
      actorID
      readAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationPostId
    }
  }
`;
export const onCreateNotification = /* GraphQL */ gql`
  subscription OnCreateNotification {
    onCreateNotification {
      id
      type
      createdAt
      userID
      actorID
      readAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationPostId
      notificationCommentId
    }
  }
`;
