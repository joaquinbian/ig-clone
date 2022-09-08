// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Like, Comment, Post, User } = initSchema(schema);

export {
  Like,
  Comment,
  Post,
  User
};