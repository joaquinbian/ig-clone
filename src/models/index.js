// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NotificationType = {
  "NEW_FOLLOWER": "NEW_FOLLOWER",
  "NEW_LIKE": "NEW_LIKE",
  "NEW_COMMENT": "NEW_COMMENT"
};

const { Comment, User, Post, Like, CommentLike, UserFollow, Notification, UserFeedPost } = initSchema(schema);

export {
  Comment,
  User,
  Post,
  Like,
  CommentLike,
  UserFollow,
  Notification,
  UserFeedPost,
  NotificationType
};