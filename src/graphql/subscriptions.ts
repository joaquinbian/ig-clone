/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
      }
      Post {
        id
        description
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
        }
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
      }
      Post {
        id
        description
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
        }
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
      }
      Post {
        id
        description
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
        }
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCommentLike = /* GraphQL */ `
  subscription OnCreateCommentLike {
    onCreateCommentLike {
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
      }
      Comment {
        id
        comment
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
        }
        Post {
          id
          description
          image
          images
          video
          numberOfComments
          numberOfLikes
          userID
          untitledfield
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCommentLike = /* GraphQL */ `
  subscription OnUpdateCommentLike {
    onUpdateCommentLike {
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
      }
      Comment {
        id
        comment
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
        }
        Post {
          id
          description
          image
          images
          video
          numberOfComments
          numberOfLikes
          userID
          untitledfield
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCommentLike = /* GraphQL */ `
  subscription OnDeleteCommentLike {
    onDeleteCommentLike {
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
      }
      Comment {
        id
        comment
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
        }
        Post {
          id
          description
          image
          images
          video
          numberOfComments
          numberOfLikes
          userID
          untitledfield
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      comment
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
      }
      Post {
        id
        description
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
        }
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      comment
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
      }
      Post {
        id
        description
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
        }
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      comment
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
      }
      Post {
        id
        description
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
        }
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      description
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
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          comment
          userID
          postID
          numberOfLikes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      description
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
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          comment
          userID
          postID
          numberOfLikes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      description
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
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          comment
          userID
          postID
          numberOfLikes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
          image
          images
          video
          numberOfComments
          numberOfLikes
          userID
          untitledfield
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          comment
          userID
          postID
          numberOfLikes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
          image
          images
          video
          numberOfComments
          numberOfLikes
          userID
          untitledfield
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          comment
          userID
          postID
          numberOfLikes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
          image
          images
          video
          numberOfComments
          numberOfLikes
          userID
          untitledfield
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          comment
          userID
          postID
          numberOfLikes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
