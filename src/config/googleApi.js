/* eslint-disable indent */
require('dotenv').config();
const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID, // Google client ID
    process.env.GOOGLE_CLIENT_SECRET, // Google client secret
    process.env.GOOGLE_CLIENT_REDIRECT_URL // redirectUrl
);

oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_CLIENT_REFRESH_TOKEN,
});

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client,
});

// exports.getAuthUrl = () => {
//     // Get the authentication URL
//     const authUrl = oauth2Client.generateAuthUrl({
//       access_type: 'online',
//       scope: 'https://www.googleapis.com/auth/drive',
//     });
//     // Log the auth URL
//     console.log('Authorization URL:', authUrl);
// };

exports.uploadFile = async () => {
    const response = await drive.files.create({
        requestBody: {
          name: 'Test',
          mimeType: 'text/plain'
        },
        media: {
          mimeType: 'text/plain',
          body: 'Hello World'
        }
      });
    console.log("🚀 ~ file: googleApi.js:54 ~ exports.uploadFile= ~ response:", response);
};
