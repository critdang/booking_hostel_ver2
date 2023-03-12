require('dotenv').config();

// Initialize Firebase Admin SDK
const admin = require("firebase-admin");

const serviceAccount = require("./path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://luxury-hotel-7c64b-default-rtdb.asia-southeast1.firebasedatabase.app"
});

module.exports = admin;
