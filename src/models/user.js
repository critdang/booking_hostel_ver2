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
      this.hasMany(models.Invoice, {
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
    fullName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM('pending', 'reject', 'active'),
      defaultValue: 'pending',
    },
    gender: {
      allowNull: false,
      type: DataTypes.ENUM('male', 'female', 'other'),
      defaultValue: 'male',
    },
    avatar: DataTypes.STRING,
    isBlocked: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    resetToken: {
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.ENUM('admin', 'customer', 'receptionist', 'manager', 'cleaner', 'guest'),
      defaultValue: 'customer',
    },
  }, {
    sequelize,
    modelName: 'User',
    freezeTableName: true,
  });
  return User;
};
