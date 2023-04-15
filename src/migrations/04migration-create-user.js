module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('pending', 'reject', 'active'),
        defaultValue: 'pending',
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM('male', 'female', 'other'),
        defaultValue: 'male',
      },
      avatar: {
        type: Sequelize.STRING,
      },
      isBlocked: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      resetToken: {
        type: Sequelize.STRING,
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM('admin', 'customer', 'receptionist', 'manager', 'cleaner', 'guest'),
        defaultValue: 'customer',
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
    await queryInterface.dropTable('User');
  },
};
