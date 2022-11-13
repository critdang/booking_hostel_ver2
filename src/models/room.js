/* eslint-disable no-trailing-spaces */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belong to one Category
      this.belongsTo(models.Category, {
        foreignKey: 'categoryId',
      });

      // has many image
      this.belongsToMany(models.Image, {
        through: models.RoomImage,
      });
      this.hasMany(models.RoomImage, {
        foreignKey: 'roomId',
      });

      // has many roomDate
      this.hasMany(models.RoomDate, {
        foreignKey: 'roomId',
      });

      // has many cart
      this.hasMany(models.CartRoom, {
        foreignKey: 'roomId',
      });

      // has many order
      this.belongsToMany(models.Order, {
        through: models.RoomInOrder,
      });
      this.hasMany(models.RoomInOrder, {
        foreignKey: 'roomId',
      });
    }
  }
  Room.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    detail: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    hot: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN,
    categoryId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Room',
    freezeTableName: true,
  });
  return Room;
};
