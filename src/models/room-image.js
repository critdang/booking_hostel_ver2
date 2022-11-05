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
      this.belongsTo(models.Category, {
        foreignKey: 'categoryId',
      });
      this.hasMany(models.Cart, {
        foreignKey: 'roomId',
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
    href: {
      type: DataTypes.STRING,
      defaultValue: 'true'
    },
    isDefault: DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'RoomImage',
    freezeTableName: true,
  });
  return RoomImage;
};
