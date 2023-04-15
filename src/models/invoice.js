const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
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
      // has many Room
      this.belongsToMany(models.Room, {
        through: models.RoomBooking,
      });
      this.hasMany(models.RoomBooking, {
        foreignKey: 'invoiceId',
      });
    }
  }
  Invoice.init({
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
    code: {
      allowNull: false,
      type: DataTypes.STRING
    },
    checkinDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    checkoutDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM('Pending', 'Completed', 'Cancel'),
      defaultValue: 'Pending',
    },
    paymentMethod: {
      allowNull: false,
      type: DataTypes.ENUM('Pending', 'VISA', 'Cash', 'PayPal'),
      defaultValue: 'Pending',
    },
    paymentDate: DataTypes.DATEONLY,
    paymentAccountName: { type: DataTypes.STRING, allowNull: true },
    paymentAccountNumber: { type: DataTypes.STRING, allowNull: true },
    checkInStatus: {
      allowNull: false,
      type: DataTypes.ENUM('Not Check In', 'Check In', 'Check Out'),
      defaultValue: 'Not Check In',
    },
    total: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
  }, {
    sequelize,
    modelName: 'Invoice',
    freezeTableName: true,
  });
  return Invoice;
};
