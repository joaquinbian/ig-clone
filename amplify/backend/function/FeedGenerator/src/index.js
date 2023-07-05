/* Amplify Params - DO NOT EDIT
	API_INSTAGRAMCLONE_GRAPHQLAPIENDPOINTOUTPUT
	API_INSTAGRAMCLONE_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const postHandler = require('./PostEventHandler');
exports.handler = async event => {
  /* console.log(`EVENT: ${JSON.stringify(event)}`);
  event.Records.forEach(record => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  }); */
  for (const record of event.Records) {
    await handleRecord(record);
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};

const handleRecord = async record => {
  console.log(record.eventID);
  console.log(record.eventName);
  console.log('DynamoDB Record: %j', record.dynamodb);

  if (record.eventSourceARN.includes('Post')) {
    //post event
    await postHandler(record);
  } else if (record.eventSourceARN.includes('UserFollow')) {
    //follow event
  }
};
