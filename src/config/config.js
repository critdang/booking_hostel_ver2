require('dotenv').config();

module.exports = {
  development: {
    username: process.env.usernameHotel,
    password: process.env.passwordHotel,
    database: process.env.databaseHotel,
    host: process.env.hostHotel,
    dialect: process.env.dialectHotel,
    logging: true,
    query: { raw: true },
    timezone: '+07:00',
  },
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
};
