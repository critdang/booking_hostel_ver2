const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RoomBooking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongs to 1 room
      this.belongsTo(models.Room, {
        foreignKey: 'roomId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      // belongs to 1 invoice
      this.belongsTo(models.Invoice, {
        foreignKey: 'invoiceId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      // has many Service
      this.belongsToMany(models.Service, {
        through: models.ServiceRequest,
      });
      this.hasMany(models.ServiceRequest, {
        foreignKey: 'roomBookingId',
      });
      // has 1 Rating
      this.hasOne(models.Rating, {
        foreignKey: 'roomBookingId',
      });
    }
  }
  RoomBooking.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
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
    invoiceId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Invoice',
        key: 'id',
      },
    },
    from: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    to: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    adults: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    kids: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'RoomBooking',
    freezeTableName: true,
  });
  return RoomBooking;
};
