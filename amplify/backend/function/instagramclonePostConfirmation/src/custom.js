/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;

const appSyncId = process.env.API_INSTAGRAMCLONE_GRAPHQLAPIIDOUTPUT;

const TableName = `User-${appSyncId}-${env}`;

const userExist = async id => {
  try {
    const params = {
      TableName,
      Key: id,
    };

    const response = await documentClient.get(params).promise();

    return !!response?.Item;
  } catch (error) {
    return false;
  }
};
const saveUser = async user => {
  const date = new Date();
  const timestamp = date.getTime();
  const dateString = date.toISOString();
  try {
    const Item = {
      ...user,
      __typename: '',
      _lastChangedAt: timestamp,
      createdAt: dateString,
      updatedAt: dateString,
      _version: 1,
    };
    const params = {
      TableName,
      Item,
    };

    const response = await documentClient.put(params).promise();
  } catch (error) {}
};

//this is the function to be excecuted whenever we confirm a new user
exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger

  console.log('lambda function here');

  //parameters the lambda function will receive

  /* 
    as this function is attached to the post confirmation
    congnito will send inside the event all the data that 
    knows about the user that just signed up
  */
  console.log({event});

  //here there is the user data
  if (!event.request.userAttributes) {
    return;
  }

  const {sub, name, email} = event.request.userAttributes;
  //userAtributes = sub(id), name, email

  //if user does not exist in db, save itn
  const newUser = {
    id: sub,
    owner: sub,
    name,
    email,
    numberOfPosts: 0,
    numberOfFollowers: 0,
    numberOfFollowings: 0,
  };

  if (!(await userExist(newUser.id))) {
    await saveUser(newUser);
    console.log('user has been saved', newUser);
  } else {
    console.log('user already exist', newUser);
  }
  return event;
};
