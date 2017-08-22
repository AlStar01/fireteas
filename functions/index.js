const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.newUser = functions.auth.user().onCreate(event => {
    const joinDate = admin.database.ServerValue.TIMESTAMP;

    const user = Object.assign({}, event.data, { joinDate });

    admin.database().ref('/users/' + user.uid).set(user);
});
