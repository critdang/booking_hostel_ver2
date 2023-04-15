const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RoomAmenity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Room, {
        foreignKey: 'roomId',
      });
      this.belongsTo(models.Amenity, {
        foreignKey: 'amenityId',
      });
    }
  }
  RoomAmenity.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    roomId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Room',
        key: 'id',
      },
    },
    amenityId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Amenity',
        key: 'id',
      },
    },
    isUsable: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    amount: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'RoomAmenity',
    freezeTableName: true,
  });
  return RoomAmenity;
};
