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
        readAt
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification($owner: String) {
    onCreateNotification(owner: $owner) {
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
