const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.RoomBooking, {
        foreignKey: 'roomBookingId',
      });
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
    }
  }
  Rating.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    roomBookingId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'RoomBooking',
        key: 'id',
      },
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'User',
        key: 'id',
      },
    },
    rate: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    ratingDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'Rating',
    freezeTableName: true,
  });
  return Rating;
};
