#!/bin/bash
set -e
IFS='|'

if [ -z "$AWS_ACCESS_KEY_ID" ] && [ -z "$AWS_SECRET_ACCESS_KEY" ] ; then
  echo "You must provide the action with both AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables in order to deploy"
  exit 1
fi

if [ -z "$AWS_REGION" ] ; then
  echo "You must provide AWS_REGION environment variable in order to deploy"
  exit 1
fi

if [ -z "$AMPLIFY_FACEBOOK_CLIENT_ID_STAGING" ] && [ -z "$AMPLIFY_FACEBOOK_CLIENT_SECRET_STAGING" ] ; then
  echo "You must provide the action with both AMPLIFY_FACEBOOK_CLIENT_ID_STAGING and AMPLIFY_FACEBOOK_CLIENT_SECRET_STAGING environment variables in order to deploy"
  exit 1
fi

if [ -z "$AMPLIFY_GOOGLE_CLIENT_ID" ] && [ -z "$AMPLIFY_GOOGLE_CLIENT_SECRET" ] ; then
  echo "You must provide the action with both AMPLIFY_GOOGLE_CLIENT_ID and AMPLIFY_GOOGLE_CLIENT_SECRET environment variables in order to deploy"
  exit 1
fi

if [ -z "$1" ] ; then
  echo "You must provide envName input parameter in order to pull"
  exit 1
fi

AUTHCONFIG="{\
  \"facebookAppIdUserPool\":\"${AMPLIFY_FACEBOOK_CLIENT_ID_STAGING}\",\
  \"facebookAppSecretUserPool\":\"${AMPLIFY_FACEBOOK_CLIENT_SECRET_STAGING}\",\
  \"googleAppIdUserPool\":\"${AMPLIFY_GOOGLE_CLIENT_ID}\",\
  \"googleAppSecretUserPool\":\"${AMPLIFY_GOOGLE_CLIENT_SECRET}\",\
}"

CATEGORIES="{\
  \"auth\":$AUTHCONFIG\
}"

AWSCLOUDFORMATIONCONFIG="{\
  \"useProfile\":true,\
  \"profileName\":\"default\",\
  \"accessKeyId\":\"$AWS_ACCESS_KEY_ID\",\
  \"secretAccessKey\":\"$AWS_SECRET_ACCESS_KEY\",\
  \"region\":\"$AWS_REGION\"\
}"
PROVIDERS="{\
  \"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
}"

AMPLIFY="{\
  \"envName\":\"$1\",\
  \"defaultEditor\":\"code\"\
}"

REACTCONFIG="{\
  \"SourceDir\":\"src\",\
  \"DistributionDir\":\"/\",\
  \"BuildCommand\":\"npm run-script build\",\
  \"StartCommand\":\"npm run-script start\"\
}"

FRONTEND="{\
  \"frontend\":\"javascript\",\
  \"framework\":\"react-native\",\
  \"config\":$REACTCONFIG\
}"


amplify init \
--amplify $AMPLIFY \
--categories $CATEGORIES \
--frontend $FRONTEND \
--providers $PROVIDERS \
--yes
