module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Room', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      detail: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      hot: {
        type: Sequelize.BOOLEAN,
      },
      active: {
        type: Sequelize.BOOLEAN,
      },
      adult_limit: {
        type: Sequelize.INTEGER,
      },
      kid_limit: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.ENUM('available', 'unavailable', 'maintenance'),
        defaultValue: 'available',
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Branch',
          key: 'id',
          as: 'branchId',
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
    await queryInterface.dropTable('Room');
  },
};
