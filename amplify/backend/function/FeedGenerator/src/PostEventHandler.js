const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;

const appSyncId = process.env.API_INSTAGRAMCLONE_GRAPHQLAPIIDOUTPUT;

const TableName = `UserFollow-${appSyncId}-${env}`;
const TableNameUserFeed = `UserFeedPost-${appSyncId}-${env}`;

async function handle(record) {
  if (record.eventName !== 'INSERT') {
    return;
  }
  //get the followers of postowner

  //push new post to their feeds
  const followers = await getFollowers(record.dynamodb.NewImage.userID.S);
  console.log({followers});

  await Promise.all(
    followers.map(follower =>
      pushPostToUserFeed(record.dynamodb.NewImage, follower.followerID),
    ),
  );
}

async function pushPostToUserFeed(image, userId) {
  const date = new Date();
  const timestamp = date.getTime();
  const dateString = date.toISOString();
  try {
    const Item = {
      id: `${userId}::${image.id.S}`,
      owner: `${userId}::${userId}`,
      postID: image.id.S,
      postOwnerID: image.userID.S,
      postCreatedAt: image.createdAt.S,
      userID: userId,
      _version: 1,
      _lastChangedAt: timestamp,
      updatedAt: dateString,
      createdAt: dateString,
      __typename: 'UserFeedPost',
    };

    console.log({Item});
    const params = {
      TableName: TableNameUserFeed,
      Item,
    };

    const response = await documentClient.put(params).promise();
  } catch (error) {
    console.log('error', error);
  }
}

async function getFollowers(id) {
  const params = {
    TableName,
    IndexName: 'byFollowee',
    KeyConditionExpression: 'followeeID = :followeeID',
    FilterExpression: 'attribute_not_exists(#deleted)',
    ExpressionAttributeValues: {
      ':followeeID': id,
    },
    ExpressionAttributeNames: {
      '#deleted': '_deleted',
    },
  };
  try {
    const followers = await documentClient.query(params).promise();
    return followers.Items ?? [];
  } catch (e) {
    console.log(e);
  }
}

module.exports = handle;
