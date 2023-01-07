import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

type CommentMetaData = {
  readOnlyFields: 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'updatedAt';
}

type LikeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentLikeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerComment = {
  readonly id: string;
  readonly comment: string;
  readonly createdAt: string;
  readonly numberOfLikes: number;
  readonly User?: User | null;
  readonly Post?: Post | null;
  readonly CommentLikes?: (CommentLike | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly id: string;
  readonly comment: string;
  readonly createdAt: string;
  readonly numberOfLikes: number;
  readonly User: AsyncItem<User | undefined>;
  readonly Post: AsyncItem<Post | undefined>;
  readonly CommentLikes: AsyncCollection<CommentLike>;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment, CommentMetaData>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

type EagerUser = {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly bio?: string | null;
  readonly username?: string | null;
  readonly website?: string | null;
  readonly email?: string | null;
  readonly numberOfPosts: number;
  readonly numberOfFollowers: number;
  readonly numberOfFollowings: number;
  readonly Posts?: (Post | null)[] | null;
  readonly Likes?: (Like | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly CommentLikes?: (CommentLike | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly bio?: string | null;
  readonly username?: string | null;
  readonly website?: string | null;
  readonly email?: string | null;
  readonly numberOfPosts: number;
  readonly numberOfFollowers: number;
  readonly numberOfFollowings: number;
  readonly Posts: AsyncCollection<Post>;
  readonly Likes: AsyncCollection<Like>;
  readonly Comments: AsyncCollection<Comment>;
  readonly CommentLikes: AsyncCollection<CommentLike>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerPost = {
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt: string;
  readonly type: string;
  readonly location?: string | null;
  readonly image?: string | null;
  readonly images?: string[] | null;
  readonly video?: string | null;
  readonly numberOfComments: number;
  readonly numberOfLikes: number;
  readonly untitledfield?: string | null;
  readonly User?: User | null;
  readonly Likes?: (Like | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt: string;
  readonly type: string;
  readonly location?: string | null;
  readonly image?: string | null;
  readonly images?: string[] | null;
  readonly video?: string | null;
  readonly numberOfComments: number;
  readonly numberOfLikes: number;
  readonly untitledfield?: string | null;
  readonly User: AsyncItem<User | undefined>;
  readonly Likes: AsyncCollection<Like>;
  readonly Comments: AsyncCollection<Comment>;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post, PostMetaData>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

type EagerLike = {
  readonly id: string;
  readonly User?: User | null;
  readonly Post?: Post | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLike = {
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Post: AsyncItem<Post | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Like = LazyLoading extends LazyLoadingDisabled ? EagerLike : LazyLike

export declare const Like: (new (init: ModelInit<Like, LikeMetaData>) => Like) & {
  copyOf(source: Like, mutator: (draft: MutableModel<Like, LikeMetaData>) => MutableModel<Like, LikeMetaData> | void): Like;
}

type EagerCommentLike = {
  readonly id: string;
  readonly User?: User | null;
  readonly Comment?: Comment | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommentLike = {
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Comment: AsyncItem<Comment | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommentLike = LazyLoading extends LazyLoadingDisabled ? EagerCommentLike : LazyCommentLike

export declare const CommentLike: (new (init: ModelInit<CommentLike, CommentLikeMetaData>) => CommentLike) & {
  copyOf(source: CommentLike, mutator: (draft: MutableModel<CommentLike, CommentLikeMetaData>) => MutableModel<CommentLike, CommentLikeMetaData> | void): CommentLike;
}