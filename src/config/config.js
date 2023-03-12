const path = require('path');

require('dotenv').config();

const rootPath = path.join(__dirname, '../log');

module.exports = {
  development: {
    username: process.env.usernameHotel,
    password: process.env.passwordHotel,
    database: process.env.databaseHotel,
    host: process.env.hostHotel,
    // port: process.env.PORT,
    dialect: 'mysql',
    logging: true,
    query: { raw: true },
    timezone: '+07:00',
  },
  test: {
    username: process.env.usernameHotel,
    password: process.env.passwordHotel,
    database: process.env.databaseHotelTest,
    host: process.env.hostHotel,
    dialect: 'mysql',
    logging: true,
    query: { raw: true },
    timezone: '+07:00',
  },
  production: {
    username: process.env.usernameHotel,
    password: process.env.passwordHotel,
    database: process.env.databaseHotel,
    host: process.env.hostHotel,
    port: process.env.PORT_DB,
    dialect: 'mysql',
    logging: true,
    query: { raw: true },
    timezone: '+07:00',
  },
  logger: {
    path: rootPath,
    fileName: 'event-admin'
  }
};
