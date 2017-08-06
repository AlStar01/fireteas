const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.newUser = functions.auth.user().onCreate(event => {
    const date = new Date().toISOString();

    const user = Object.assign({}, event.data, { joinDate: date });

    admin.database().ref('/users').push(user);
});