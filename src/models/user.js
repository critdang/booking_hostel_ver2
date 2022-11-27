const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Cart, {
        foreignKey: 'userId',
      });
      this.hasMany(models.Order, {
        foreignKey: 'userId',
      });
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: {
      allowNull: true,
      type: DataTypes.ENUM('pending', 'reject', 'active'),
      defaultValue: 'pending',
    },
    gender: {
      type: DataTypes.ENUM('male', 'female', 'other'),
      defaultValue: 'male',
    },
    avatar: DataTypes.STRING,
    isBlocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    resetToken: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      defaultValue: 'user',
    },
    refreshToken: {
      type: DataTypes.STRING,

    }
  }, {
    sequelize,
    modelName: 'User',
    freezeTableName: true,
  });
  return User;
};
