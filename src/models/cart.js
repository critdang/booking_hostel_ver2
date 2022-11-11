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
      // has one user
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      // // has many order
      // this.belongsToMany(models.Order, {
      //   through: models.CartOrder,
      // });
      // this.hasMany(models.CartOrder, {
      //   foreignKey: 'cartId',
      // });
      // has many room
      // this.belongsToMany(models.Room, {
      //   through: models.CartRoom,
      // });
      this.hasMany(models.CartRoom, {
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
    modelName: 'Cart',
    freezeTableName: true,
  });
  return Cart;
};
