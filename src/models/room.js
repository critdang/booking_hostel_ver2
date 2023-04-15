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
      // belong to one Category
      this.belongsTo(models.Category, {
        foreignKey: 'categoryId',
      });
      // belong to one Branch
      this.belongsTo(models.Branch, {
        foreignKey: 'BranchId',
      });

      // has many image
      this.belongsToMany(models.Image, {
        through: models.RoomImage,
      });
      this.hasMany(models.RoomImage, {
        foreignKey: 'roomId',
      });

      // has many roomDate
      this.hasMany(models.RoomDate, {
        foreignKey: 'roomId',
      });

      // has many invoice
      this.belongsToMany(models.Invoice, {
        through: models.RoomBooking,
      });
      this.hasMany(models.RoomBooking, {
        foreignKey: 'roomId',
      });

      // has many review
      this.hasMany(models.Review, {
        foreignKey: 'roomId',
      });

      // has many amenities
      this.belongsToMany(models.Amenity, {
        through: models.RoomAmenity,
      });
      this.hasMany(models.RoomAmenity, {
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
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    detail: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    hot: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    active: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    adult: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    kid: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM('available', 'unavailable', 'maintenance'),
      defaultValue: 'available',
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Category',
        key: 'id',
        as: 'categoryId',
      },
    },
    branchId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Branch',
        key: 'id',
        as: 'branchId',
      },
    }
  }, {
    sequelize,
    modelName: 'Room',
    freezeTableName: true,
  });
  return Room;
};
