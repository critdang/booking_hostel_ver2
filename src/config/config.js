require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 'admin123',
    database: 'booking_hotel_db1',
    host: 'booking-hotel-db1.cgdmracygurn.ap-northeast-1.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql',
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
