const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Room, {
        through: models.RoomImage,
      });
      this.hasMany(models.RoomImage, {
        foreignKey: 'imageId',
      });
    }
  }
  Image.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    href: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'true'
    },
    isDefault: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },

  }, {
    sequelize,
    modelName: 'Image',
    freezeTableName: true,
  });
  return Image;
};
