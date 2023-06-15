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

const documentClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;

const appSyncId = process.env.API_INSTAGRAMCLONE_GRAPHQLAPIIDOUTPUT;

const TableName = `User-${appSyncId}-${env}`;

exports.handler = event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  /*  event.Records.forEach(record => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  }); */
  /* for(const record of event.Records){
    await handleEvent(record)
  } */

  Promise.all(event.Records.map(handleEvent));
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
  } else if (
    record.eventName === 'MODIFY' &&
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
      'decrease number of followings of user ',
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
      dynamodb.NewImage.followeeID.S,
    );
    await updateUserFollowers(
      dynamodb.NewImage.followeeID.S,
      'numberOfFollowers',
      1,
    );
    console.log(
      'Increase number of followings for ',
      dynamodb.NewImage.followerID.S,
    );
    await updateUserFollowers(
      dynamodb.NewImage.followerID.S,
      'numberOfFollowings',
      1,
    );
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
  } catch (e) {
    console.log(e);
  }
};
