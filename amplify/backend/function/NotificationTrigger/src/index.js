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
const {sendNotification} = require('./firebase');

const documentClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;

const appSyncId = process.env.API_INSTAGRAMCLONE_GRAPHQLAPIIDOUTPUT;

const UserTableName = `User-${appSyncId}-${env}`;

const NOTIFICATION_TITLE = {
  NEW_FOLLOWER: 'You have a new follower!',
  NEW_COMMENT: 'You have a new comment!',
  NEW_LIKE: 'You have a new like!',
};

const NOTIFICATION_BODY = {
  NEW_COMMENT: 'has commented your post',
  NEW_FOLLOWER: 'has followed you',
  NEW_LIKE: 'has liked your post',
};
exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  await Promise.all(event.Records.map(handleEvent));
  return Promise.resolve('Successfully processed DynamoDB record');
};

async function handleRecord(record) {
  console.log(record.eventID);
  console.log(record.eventName);
  console.log('DynamoDB Record: %j', record.dynamodb);

  if (record.eventName !== 'INSERT') {
    return;
  }

  //get user from DB

  const userID = record.dynamodb.NewImage.userID.S;
  const user = await getUser(userID);
  if (!user?.fcmToken) {
    console.log('user fcmToken was not found');
    return;
  }
  //get FCM token from user
  console.log('sending notification to', userID);

  const notificationType = record.dynamoDB.NewImage.type.S;
  const notificationActorID = record.dynamoDB.NewImage.actorID.S;
  const notificationPostId = record.dynamoDB.NewImage.notificationPostId.S;
  const data = {};

  const notification = await createNotification(
    notificationType,
    notificationActorID,
  );

  if (notificationPostId) {
    data.postID = notificationPostId;
  }

  await sendNotification(notification, user.fcmToken, data);

  //send notification to that user using his FCM token
}

async function getUser(id) {
  try {
    const params = {
      Table: UserTableName,
      Key: {id},
    };
    const response = await documentClient.get(params).promise();
    return response?.Item;
  } catch (error) {
    console.log(error);
    console.log('error getting user in Notification Trigger');
  }
}

async function createNotification(type, actorID) {
  const actor = await getUser(actorID);

  return {
    title: NOTIFICATION_TITLE[type],
    body: `${actor.name} ${NOTIFICATION_BODY[type]}`,
  };
}
