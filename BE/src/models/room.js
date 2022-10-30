const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      this.hasMany(models.Cart, {
        foreignKey: 'roomId',
      });
    }
  }
  Room.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    roomName: DataTypes.STRING,
    detail: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    reserve: DataTypes.INTEGER,
    hot: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    categoryId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Category',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Room',
    freezeTableName: true,
  });
  return Room;
};
