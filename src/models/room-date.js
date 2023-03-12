const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RoomDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Room, {
        foreignKey: 'roomId',
      });
    }
  }
  RoomDate.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    roomId: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Room',
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
  }, {
    sequelize,
    modelName: 'RoomDate',
    freezeTableName: true,
  });
  return RoomDate;
};
