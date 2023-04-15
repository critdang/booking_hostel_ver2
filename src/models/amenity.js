const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Amenity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Room, {
        through: models.RoomAmenity,
      });
      this.hasMany(models.RoomAmenity, {
        foreignKey: 'amenityId',
      });
    }
  }
  Amenity.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Amenity',
    freezeTableName: true,
  });
  return Amenity;
};
