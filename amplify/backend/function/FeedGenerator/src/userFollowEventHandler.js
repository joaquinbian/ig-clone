const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;

const appSyncId = process.env.API_INSTAGRAMCLONE_GRAPHQLAPIIDOUTPUT;

const TableName = `UserFollow-${appSyncId}-${env}`;
const TableNameUserFeed = `UserFeedPost-${appSyncId}-${env}`;
const PostTable = `Post-${appSyncId}-${env}`;

const BATCH_SIZE = 25;

async function handle({eventName, dynamodb}) {
  const followerID = dynamodb.NewImage.followerID.S;
  const followeeID = dynamodb.NewImage.followeeID.S;
  if (eventName === 'INSERT') {
    await addPostToFollowerFeed(followerID, followeeID);
    console.log('follow event');
  } else if (eventName === 'MODIFY') {
    if (
      !dynamodb.OldImage._deleted?.BOOL &&
      !!dynamodb.NewImage._deleted?.BOOL
    ) {
      await removePostsFromFolloweerFeed(followerID, followeeID);
    }
  }
}

async function removePostsFromFolloweerFeed(followerID, followeeID) {}

async function addPostToFollowerFeed(followerID, followeeID) {
  //query all post by user id
  const posts = await getPostsByUserId(followeeID);

  console.log(`Adding ${posts.length} to ${followeeID}`);

  //add post to userfeed post table

  //await Promise.all(posts.map(post => addPostToFollowerFeed(followerID, post)));
  const timesToSlice = Math.ceil(posts.length / BATCH_SIZE);
  for (let i = 0; i < timesToSlice; i++) {
    const chunk = posts.slice(i * BATCH_SIZE, BATCH_SIZE * (i + 1));
    console.log(chunk);
    await addPostsToUserFeed(followerID, chunk);
  }

  /*  posts.forEach((post, index)=>{
    await addPostToUserFeed(followerID, post)
  }) */
}

async function getPostsByUserId(userId) {
  //query dynamo db
  const params = {
    TableName: PostTable,
    IndexName: 'byUser',
    KeyConditionExpression: 'userID = :userID',
    FilterExpression: 'attribute_not_exists(#deleted)',
    ExpressionAttributeValues: {
      ':userID': userId,
    },
    ExpressionAttributeNames: {
      '#deleted': '_deleted',
    },
  };
  try {
    const posts = await documentClient.query(params).promise();
    return posts.Items;
  } catch (e) {
    console.log(e);

    return [];
  }
}

async function addPostsToUserFeed(followerID, posts) {
  const params = {
    RequestItems: {
      [TableNameUserFeed]: posts.map(post =>
        generatePutRequest(post, followerID),
      ),
    },
  };

  try {
    await documentClient.batchWrite(params).promise();
  } catch (error) {
    console.log('error', error);
  }
}

function generatePutRequest(post, userID) {
  const date = new Date();
  const timestamp = date.getTime();
  const dateString = date.toISOString();

  return {
    PutRequest: {
      Item: {
        id: `${userID}::${post.id}`,
        postID: post.id,
        postCreatedAt: post.createdAt,
        postOwnerID: post.userID,
        _lastChangedAt: timestamp,
        createdAt: dateString,
        updatedAt: dateString,
        userID,
        owner: `${userID}::${userID}`,
        _version: 1,
        __typename: 'UserFeedPost',
      },
    },
  };
}
module.exports = handle;
