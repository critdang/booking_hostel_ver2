module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoomBooking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      roomId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Room',
          key: 'id',
        },
      },
      invoiceId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Invoice',
          key: 'id',
        },
      },
      from: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      to: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      adults: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      kids: {
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
    await queryInterface.dropTable('RoomBooking');
  },
};
