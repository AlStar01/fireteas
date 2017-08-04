const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.newUser = functions.auth.user().onCreate(event => {
    const user = event.data;

    const date = new Date().toISOString();

    const newUser = Object.assign({}, user, { joinedDate: date });

    admin.database().ref('/users').push(newUser);
});