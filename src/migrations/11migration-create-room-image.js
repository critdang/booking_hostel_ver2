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
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Room',
          key: 'id',
        },
      },
      imageId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Image',
          key: 'id',
        },
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
    await queryInterface.dropTable('RoomImage');
  },
};
