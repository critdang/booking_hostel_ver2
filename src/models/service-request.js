const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ServiceRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.RoomBooking, {
        foreignKey: 'roomBookingId',
      });
      this.belongsTo(models.Service, {
        foreignKey: 'serviceId',
      });
    }
  }
  ServiceRequest.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    roomBookingId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'RoomBooking',
        key: 'id',
      },
    },
    serviceId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Service',
        key: 'id',
      },
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'ServiceRequest',
    freezeTableName: true,
  });
  return ServiceRequest;
};
