const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;

const appSyncId = process.env.API_INSTAGRAMCLONE_GRAPHQLAPIIDOUTPUT;

const TableName = `UserFollow-${appSyncId}-${env}`;

async function handle(record) {
  if (record.eventName !== 'INSERT') {
    return;
  }
  //get the followers of postowner

  //push new post to their feeds
  const followers = await getFollowers(record.dynamodb.NewImage.userID.S);
  console.log({followers});
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
    ExpressionAttributeValues: {
      '#deleted': '_deleted',
    },
  };
  try {
    await documentClient.query(params).promise();
  } catch (e) {
    console.log(e);
  }
}

module.exports = handle;
