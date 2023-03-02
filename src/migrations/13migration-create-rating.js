module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rating', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      roomBookingId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'RoomBooking',
          key: 'id',
          as: 'roomBookingId',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id',
          as: 'userId',
        },
      },
      rate: {
        type: Sequelize.INTEGER,
      },
      ratingDate: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('Rating');
  },
};
