const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.databaseHotel, process.env.usernameHotel, process.env.passwordHotel, { // ket noi den db (dbname, username, password)
  // logging: false, // để k in câu lệnh:   Executing (default): SELECT 1+1 AS result
  host: process.env.hostHotel,
  port: process.env.PORT_DB,
  password: process.env.passwordHotel,
  database: process.env.databaseHotel,
  logging: true,
  username: process.env.usernameHotel,
  maxConcurrentQueries: 100,
  dialect: 'mysql',
  // ssl: 'Amazon RDS',
  // ssl: {},
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // accept unauthorized with ssl key no certificate
    },
  },
  pool: { maxConnections: 5, maxIdleTime: 30 },
  language: 'en',
});
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('🚀 Connection to DB has been established successfully.');
    // có thêm câu Executing (default): SELECT 1+1 AS result là kết nối thành công
  } catch (error) {
    console.log("🚀 ~ file: connectDB.js ~ line 26 ~ connectDB ~ error", error);
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { connectDB, sequelize };
