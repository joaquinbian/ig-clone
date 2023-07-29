const {initializeApp, cert} = require('firebase-admin/app');
const {getMessaging} = require('firebase-admin/messaging');

const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);

//inicialize firabse admin app
initializeApp({credential: cert(serviceAccount)});

exports.sendNotification = async function (notification, fcmToken, data = {}) {
  const message = {
    token: fcmToken,
    notification,
    data,
  };
  await getMessaging(message);
};
