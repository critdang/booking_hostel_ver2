const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Cart, {
        foreignKey: 'cartId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      this.belongsTo(models.Order, {
        foreignKey: 'orderId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  CartOrder.init({
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
    orderId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Order',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'CartOrder',
    freezeTableName: true,
  });
  return CartOrder;
};
