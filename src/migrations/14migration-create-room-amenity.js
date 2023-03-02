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
        references: {
          model: 'Room',
          key: 'id',
          as: 'roomId',
        },
      },
      amenityId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Amenity',
          key: 'id',
          as: 'amenityId',
        },
      },
      isUsable: {
        type: Sequelize.BOOLEAN,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('RoomAmenity');
  },
};
