const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Cart, {
        foreignKey: 'cartId',
      });
      this.belongsTo(models.Room, {
        foreignKey: 'roomId',
      });
    }
  }
  CartRoom.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    cartId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Cart',
        key: 'id',
      },
    },
    roomId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Room',
        key: 'id',
      },
    },
    checkIn: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    checkOut: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'CartRoom',
    freezeTableName: true,
  });
  return CartRoom;
};
