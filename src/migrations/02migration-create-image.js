module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Image', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      href: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      isDefault: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('Image');
  },
};
