/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCommentLike = /* GraphQL */ `
  mutation CreateCommentLike(
    $input: CreateCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    createCommentLike(input: $input, condition: $condition) {
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
        }
        CommentLikes {
          nextToken
          startedAt
        }
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
export const updateCommentLike = /* GraphQL */ `
  mutation UpdateCommentLike(
    $input: UpdateCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    updateCommentLike(input: $input, condition: $condition) {
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
        }
        CommentLikes {
          nextToken
          startedAt
        }
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
export const deleteCommentLike = /* GraphQL */ `
  mutation DeleteCommentLike(
    $input: DeleteCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    deleteCommentLike(input: $input, condition: $condition) {
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
        }
        CommentLikes {
          nextToken
          startedAt
        }
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
          createdAt
          userID
          postID
          numberOfLikes
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
          createdAt
          userID
          postID
          numberOfLikes
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
          createdAt
          userID
          postID
          numberOfLikes
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
          createdAt
          userID
          postID
          numberOfLikes
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
          createdAt
          userID
          postID
          numberOfLikes
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
          createdAt
          userID
          postID
          numberOfLikes
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
