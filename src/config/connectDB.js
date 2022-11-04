const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.databaseHotel, process.env.usernameHotel, process.env.passwordHotel, { // ket noi den db (dbname, username, password)
  host: process.env.hostHotel, // <=> 127.0.0.1
  dialect: process.env.dialectHotel,
  logging: false, // để k in câu lệnh:   Executing (default): SELECT 1+1 AS result
});
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // có thêm câu Executing (default): SELECT 1+1 AS result là kết nối thành công
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { connectDB, sequelize };
