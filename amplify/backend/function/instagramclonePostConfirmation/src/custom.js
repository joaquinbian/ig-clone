/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

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

  return event;
};
