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
  subscription OnCreateLike($owner: String) {
    onCreateLike(owner: $owner) {
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
  subscription OnUpdateLike($owner: String) {
    onUpdateLike(owner: $owner) {
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
  subscription OnDeleteLike($owner: String) {
    onDeleteLike(owner: $owner) {
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
  subscription OnCreateCommentLike($owner: String) {
    onCreateCommentLike(owner: $owner) {
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
  subscription OnUpdateCommentLike($owner: String) {
    onUpdateCommentLike(owner: $owner) {
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
  subscription OnDeleteCommentLike($owner: String) {
    onDeleteCommentLike(owner: $owner) {
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
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
