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
      // has one user
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      this.belongsTo(models.Guest, {
        foreignKey: 'guestId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      // // has many Cart
      // this.belongsToMany(models.Cart, {
      //   through: models.CartOrder,
      // });
      // this.hasMany(models.CartOrder, {
      //   foreignKey: 'orderId',
      // });

      // has many Room
      this.belongsToMany(models.Room, {
        through: models.RoomInOrder,
      });
      this.hasMany(models.RoomInOrder, {
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
    guestId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Guest',
        key: 'id',
      },
    },
    code: DataTypes.STRING,
    date: DataTypes.DATE,
    status: {
      allowNull: false,
      type: DataTypes.ENUM('Pending', 'Completed', 'Cancel'),
      defaultValue: 'Pending',
    },
    adminAction: {
      type: DataTypes.ENUM('Cancel', 'Accept', 'Pending'),
      defaultValue: 'Pending',
    },
    paymentMethod: {
      type: DataTypes.ENUM('Pending', 'Visa', 'Cash', 'PayPal'),
      defaultValue: 'Pending',
    },
    paymentDate: {
      type: DataTypes.DATE,
    },
    total: DataTypes.FLOAT,

  }, {
    sequelize,
    modelName: 'Order',
    freezeTableName: true,
  });
  return Order;
};
