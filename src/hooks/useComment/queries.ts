import {gql} from '@apollo/client';

export const createComment = /* GraphQL */ gql`
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const getPost = /* GraphQL */ gql`
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      numberOfComments
      userID
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
export const createNotification = /* GraphQL */ gql`
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
        Posts {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        CommentLikes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        Notification {
          nextToken
          startedAt
        }
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
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Comment {
        id
        comment
        createdAt
        userID
        postID
        numberOfLikes
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
        CommentLikes {
          nextToken
          startedAt
        }
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
      notificationCommentId
      owner
    }
  }
`;
