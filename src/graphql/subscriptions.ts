/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCommentByPostId = /* GraphQL */ `
  subscription OnCreateCommentByPostId($postID: ID!) {
    onCreateCommentByPostId(postID: $postID) {
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
        email
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
          email
          numberOfPosts
          numberOfFollowers
          numberOfFollowings
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
      CommentLikes {
        items {
          id
          userID
          commentID
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onCreateLike(filter: $filter, owner: $owner) {
      id
      userID
      postID
      User {
        id
        name
        image
        bio
        username
        website
        email
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
          email
          numberOfPosts
          numberOfFollowers
          numberOfFollowings
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onUpdateLike(filter: $filter, owner: $owner) {
      id
      userID
      postID
      User {
        id
        name
        image
        bio
        username
        website
        email
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
          email
          numberOfPosts
          numberOfFollowers
          numberOfFollowings
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onDeleteLike(filter: $filter, owner: $owner) {
      id
      userID
      postID
      User {
        id
        name
        image
        bio
        username
        website
        email
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
          email
          numberOfPosts
          numberOfFollowers
          numberOfFollowings
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateCommentLike = /* GraphQL */ `
  subscription OnCreateCommentLike(
    $filter: ModelSubscriptionCommentLikeFilterInput
    $owner: String
  ) {
    onCreateCommentLike(filter: $filter, owner: $owner) {
      id
      userID
      commentID
      User {
        id
        name
        image
        bio
        username
        website
        email
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
        createdAt
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
          email
          numberOfPosts
          numberOfFollowers
          numberOfFollowings
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateCommentLike = /* GraphQL */ `
  subscription OnUpdateCommentLike(
    $filter: ModelSubscriptionCommentLikeFilterInput
    $owner: String
  ) {
    onUpdateCommentLike(filter: $filter, owner: $owner) {
      id
      userID
      commentID
      User {
        id
        name
        image
        bio
        username
        website
        email
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
        createdAt
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
          email
          numberOfPosts
          numberOfFollowers
          numberOfFollowings
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteCommentLike = /* GraphQL */ `
  subscription OnDeleteCommentLike(
    $filter: ModelSubscriptionCommentLikeFilterInput
    $owner: String
  ) {
    onDeleteCommentLike(filter: $filter, owner: $owner) {
      id
      userID
      commentID
      User {
        id
        name
        image
        bio
        username
        website
        email
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
        createdAt
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
          email
          numberOfPosts
          numberOfFollowers
          numberOfFollowings
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
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
        email
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
          email
          numberOfPosts
          numberOfFollowers
          numberOfFollowings
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
      CommentLikes {
        items {
          id
          userID
          commentID
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
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
        email
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
          email
          numberOfPosts
          numberOfFollowers
          numberOfFollowings
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
      CommentLikes {
        items {
          id
          userID
          commentID
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
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
        email
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
          email
          numberOfPosts
          numberOfFollowers
          numberOfFollowings
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
      CommentLikes {
        items {
          id
          userID
          commentID
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
      id
      description
      createdAt
      type
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
        email
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Likes {
        items {
          id
          userID
          postID
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
      Comments {
        items {
          id
          comment
          createdAt
          userID
          postID
          numberOfLikes
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
      id
      description
      createdAt
      type
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
        email
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Likes {
        items {
          id
          userID
          postID
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
      Comments {
        items {
          id
          comment
          createdAt
          userID
          postID
          numberOfLikes
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
      id
      description
      createdAt
      type
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
        email
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Likes {
        items {
          id
          userID
          postID
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
      Comments {
        items {
          id
          comment
          createdAt
          userID
          postID
          numberOfLikes
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      name
      image
      bio
      username
      website
      email
      numberOfPosts
      numberOfFollowers
      numberOfFollowings
      Posts {
        items {
          id
          description
          createdAt
          type
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
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          userID
          postID
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
      Comments {
        items {
          id
          comment
          createdAt
          userID
          postID
          numberOfLikes
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      CommentLikes {
        items {
          id
          userID
          commentID
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      name
      image
      bio
      username
      website
      email
      numberOfPosts
      numberOfFollowers
      numberOfFollowings
      Posts {
        items {
          id
          description
          createdAt
          type
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
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          userID
          postID
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
      Comments {
        items {
          id
          comment
          createdAt
          userID
          postID
          numberOfLikes
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      CommentLikes {
        items {
          id
          userID
          commentID
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      name
      image
      bio
      username
      website
      email
      numberOfPosts
      numberOfFollowers
      numberOfFollowings
      Posts {
        items {
          id
          description
          createdAt
          type
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
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          userID
          postID
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
      Comments {
        items {
          id
          comment
          createdAt
          userID
          postID
          numberOfLikes
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      CommentLikes {
        items {
          id
          userID
          commentID
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
