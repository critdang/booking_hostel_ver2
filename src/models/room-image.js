const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RoomImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Room, {
        foreignKey: 'roomId',
      });
      this.belongsTo(models.Image, {
        foreignKey: 'imageId',
      });
    }
  }
  RoomImage.init({
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
    imageId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Image',
        key: 'id',
      },
    },

  }, {
    sequelize,
    modelName: 'RoomImage',
    freezeTableName: true,
  });
  return RoomImage;
};
