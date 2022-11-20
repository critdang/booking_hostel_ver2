const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.databaseHotel, process.env.usernameHotel, process.env.passwordHotel, { // ket noi den db (dbname, username, password)
  // host: process.env.hostHotel, // <=> 127.0.0.1
  // dialect: 'mysql',
  // logging: false, // để k in câu lệnh:   Executing (default): SELECT 1+1 AS result
  host: process.env.hostHotel,
  // port: process.env.PORT, // k cần
  password: process.env.passwordHotel,
  database: process.env.databaseHotel,
  logging: true,
  username: process.env.usernameHotel,
  maxConcurrentQueries: 100,
  dialect: 'mysql',
  // ssl: 'Amazon RDS',
  // pool: { maxConnections: 5, maxIdleTime: 30 },
  language: 'en',
});
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('🚀 Connection to DB has been established successfully.');
    // có thêm câu Executing (default): SELECT 1+1 AS result là kết nối thành công
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { connectDB, sequelize };
