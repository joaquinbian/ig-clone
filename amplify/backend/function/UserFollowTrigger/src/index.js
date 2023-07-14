/* Amplify Params - DO NOT EDIT
	API_INSTAGRAMCLONE_GRAPHQLAPIENDPOINTOUTPUT
	API_INSTAGRAMCLONE_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const {v4} = require('uuid');

const documentClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;

const appSyncId = process.env.API_INSTAGRAMCLONE_GRAPHQLAPIIDOUTPUT;

const TableName = `User-${appSyncId}-${env}`;
const NotificationTableName = `Notification-${appSyncId}-${env}`;

exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  /*  event.Records.forEach(record => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  }); */
  /* for(const record of event.Records){
    await handleEvent(record)
  } */

  await Promise.all(event.Records.map(handleEvent));
  return Promise.resolve('Successfully processed DynamoDB record');
};

const handleEvent = async record => {
  if (record.eventName === 'INSERT') {
    console.log('follow event');
    console.log(
      'increase number of followers of user ',
      record.dynamodb.NewImage.followeeID.S,
    );
    await updateUserFollowers(
      record.dynamodb.NewImage.followeeID.S,
      'numberOfFollowers',
      1,
    );
    console.log(
      'increase number of followings of user ',
      record.dynamodb.NewImage.followerID.S,
    );
    await updateUserFollowers(
      record.dynamodb.NewImage.followerID.S,
      'numberOfFollowings',
      1,
    );

    await createFollowNotification(
      record.dynamodb.NewImage.followeeID.S,
      record.dynamodb.NewImage.followerID.S,
    );
  } else if (record.eventName === 'MODIFY') {
    if (
      !record.dynamodb.OldImage._deleted?.BOOL &&
      !!record.dynamodb.NewImage._deleted?.BOOL
    ) {
      console.log('Unfollow event');
      console.log(
        'decrease number of followers of user ',
        record.dynamodb.NewImage.followeeID.S,
      );
      await updateUserFollowers(
        record.dynamodb.NewImage.followeeID.S,
        'numberOfFollowers',
        -1,
      );
      console.log(
        'Decrease number of followings for ',
        record.dynamodb.NewImage.followerID.S,
      );
      await updateUserFollowers(
        record.dynamodb.NewImage.followerID.S,
        'numberOfFollowings',
        -1,
      );
    }
    if (
      !!record.dynamodb.OldImage._deleted?.BOOL &&
      !record.dynamodb.NewImage._deleted?.BOOL
    ) {
      console.log('Re-follow event');
      console.log(
        'Increase number of followers for ',
        record.dynamodb.NewImage.followeeID.S,
      );
      await updateUserFollowers(
        record.dynamodb.NewImage.followeeID.S,
        'numberOfFollowers',
        1,
      );
      console.log(
        'Increase number of followings for ',
        record.dynamodb.NewImage.followerID.S,
      );
      await updateUserFollowers(
        record.dynamodb.NewImage.followerID.S,
        'numberOfFollowings',
        1,
      );
    }
  }
};

const updateUserFollowers = async (userId, field, value) => {
  const params = {
    TableName,
    Key: {id: userId}, //primary key of the object that we want to update
    UpdateExpression: 'ADD #field :inc, #version :version_inc', //we tell amplify how to update the user
    //#field, :inc, #version, :version_inc are just varibales
    ExpressionAttributeValues: {':inc': value, ':version_inc': 1}, //here is where we map the value used to change the entity
    ExpressionAttributeNames: {'#field': field, '#version': '_version'}, //here is where we map the fields with the actual field we want to update
    //we need to increment the version number as well in order to let the change porpagate to all the devices that depends on the data changed
  };
  try {
    await documentClient.update(params).promise();
    console.log(`${field} updated successfully for user ${userId}`);
  } catch (e) {
    console.log(e, 'error');
  }
};

const createFollowNotification = async (userID, actorID) => {
  const date = new Date();
  const timestamp = date.getTime();
  const dateString = date.toISOString();

  const Item = {
    type: 'NEW_FOLLOWER',
    actorID,
    userID,
    id: v4(),
    readAt: 0,
    owner: `${actorID}::${actorID}`,
    updatedAt: dateString,
    createdAt: dateString,
    _lastChangedAt: timestamp,
    _version: 1,
    __typename: 'Notification',
  };

  /* {
    "id": "95de1733-6e94-42ac-a274-317e06be411c",
    "actorID": "f4dd6f36-97aa-4c44-921f-5e7e9b2213b9",
    "createdAt": "2023-07-14T00:32:25.307Z",
    "notificationPostId": "0287dd44-e05f-453f-986c-c2c5f614d293",
    "owner": "f4dd6f36-97aa-4c44-921f-5e7e9b2213b9::f4dd6f36-97aa-4c44-921f-5e7e9b2213b9",
    "readAt": 0,
    "type": "NEW_LIKE",
    "updatedAt": "2023-07-14T00:32:25.307Z",
    "userID": "d176dde6-d30b-41a8-930c-ed5bc7fa6f78",
    "_lastChangedAt": 1689294745337,
    "_version": 1,
    "__typename": "Notification"
   } */

  const params = {
    TableName: NotificationTableName,
    Item,
  };

  try {
    await documentClient.put(params).promise();
  } catch (error) {}
};
