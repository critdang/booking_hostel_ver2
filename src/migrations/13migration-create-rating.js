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
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'RoomBooking',
          key: 'id',
          as: 'roomBookingId',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'User',
          key: 'id',
          as: 'userId',
        },
      },
      rate: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ratingDate: {
        allowNull: false,
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('Rating');
  },
};
