const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        uniqueKey: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      this.belongsToMany(models.Cart, {
        through: models.CartOrder,
      });
      this.hasMany(models.CartOrder, {
        foreignKey: 'orderId',
      });
    }
  }
  Order.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    code: DataTypes.STRING,
    date: DataTypes.DATE,
    status: {
      allowNull: false,
      type: DataTypes.ENUM('pending', 'reject', 'success'),
      defaultValue: 'pending',
    },
    adminAction: {
      type: DataTypes.ENUM('cancel', 'accept', 'pending'),
      defaultValue: 'pending',
    },
    payment: DataTypes.STRING,
    total: DataTypes.FLOAT,
    userId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'User',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Order',
    freezeTableName: true,
  });
  return Order;
};
