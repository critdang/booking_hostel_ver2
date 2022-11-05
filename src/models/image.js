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
      type: DataTypes.STRING,
      defaultValue: 'true'
    },
    isDefault: DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'Image',
    freezeTableName: true,
  });
  return Image;
};
