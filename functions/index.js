const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.newUser = functions.auth.user().onCreate(event => {
  const { photoURL, displayName: username, uid } = event.data;
  const joinDate = admin.database.ServerValue.TIMESTAMP;

  const user = Object.assign({}, { joinDate, photoURL, username });

  admin.database().ref('/users/' + uid).set(user);
});
