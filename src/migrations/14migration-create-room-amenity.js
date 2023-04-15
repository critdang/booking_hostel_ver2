module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoomAmenity', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      roomId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Room',
          key: 'id',
          as: 'roomId',
        },
      },
      amenityId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Amenity',
          key: 'id',
          as: 'amenityId',
        },
      },
      isUsable: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      amount: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('RoomAmenity');
  },
};
