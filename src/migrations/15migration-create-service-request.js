module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ServiceRequest', {
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
      serviceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Service',
          key: 'id',
          as: 'serviceId',
        },
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('ServiceRequest');
  },
};
