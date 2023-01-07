import {gql} from '@apollo/client';

export const createPost = /* GraphQL */ gql`
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      description
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
        numberOfPosts
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
