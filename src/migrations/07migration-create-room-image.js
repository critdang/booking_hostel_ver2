module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoomImage', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      roomId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Room',
          key: 'id',
        },
      },
      imageId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Image',
          key: 'id',
        },
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
    await queryInterface.dropTable('RoomImage');
  },
};
