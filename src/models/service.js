const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Invoice, {
        through: models.ServiceRequest,
      });
      this.hasMany(models.ServiceRequest, {
        foreignKey: 'serviceId',
      });
    }
  }
  Service.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Service',
    freezeTableName: true,
  });
  return Service;
};
