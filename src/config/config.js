const path = require('path');

require('dotenv').config();

const rootPath = path.join(__dirname, '../log');

module.exports = {
  development: {
    username: process.env.usernameHotel,
    password: process.env.passwordHotel,
    database: process.env.databaseHotel,
    host: process.env.hostHotel,
    port: process.env.PORT,
    dialect: 'mysql',
    logging: true,
    query: { raw: true },
    timezone: '+07:00',
  },
  // development: {
  //   username: 'root',
  //   password: 'admin123',
  //   database: 'booking_hotel_db1',
  //   host: 'booking-hotel-db1.cgdmracygurn.ap-northeast-1.rds.amazonaws.com',
  //   port: 3306,
  //   dialect: 'mysql',
  //   logging: true,
  //   query: { raw: true },
  //   timezone: '+07:00',
  // },
  test: {
    username: process.env.usernameHotel,
    password: process.env.passwordHotel,
    database: 'database_test',
    host: process.env.hostHotel,
    dialect: process.env.dialectHotel,
  },
  production: {
    username: process.env.usernameHotel,
    password: process.env.passwordHotel,
    database: 'database_production',
    host: process.env.hostHotel,
    dialect: process.env.dialectHotel,
  },
  logger: {
    path: rootPath,
    fileName: 'event-admin'
  }
};
