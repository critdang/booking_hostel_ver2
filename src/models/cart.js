const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Room, {
        foreignKey: 'roomId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      this.belongsToMany(models.Order, {
        through: models.CartOrder,
      });
      this.hasMany(models.CartOrder, {
        foreignKey: 'cartId',
      });
    }
  }
  Cart.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    arrival: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    departure: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    onCart: DataTypes.BOOLEAN,
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
  }, {
    sequelize,
    modelName: 'Cart',
    freezeTableName: true,
  });
  return Cart;
};
