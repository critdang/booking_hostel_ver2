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
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('pending', 'reject', 'active'),
        defaultValue: 'pending',
      },
      gender: {
        type: Sequelize.ENUM('male', 'female', 'other'),
        defaultValue: 'male',
      },
      avatar: {
        type: Sequelize.STRING,
      },
      isBlocked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      resetToken: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.ENUM('admin', 'customer', 'receptionist', 'manager', 'cleaner','guest'),
        defaultValue: 'customer',
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
    await queryInterface.dropTable('User');
  },
};
