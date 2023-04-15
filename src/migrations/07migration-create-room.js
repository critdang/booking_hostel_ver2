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
        allowNull: false,
        type: Sequelize.STRING,
      },
      detail: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      hot: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      active: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      adult: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      kid: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      status: {
        allowNull: false,
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
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Room');
  },
};
