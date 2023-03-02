module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invoice', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.STRING,
      },
      checkinDate: {
        type: Sequelize.DATE,
      },
      checkoutDate: {
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('Pending', 'Completed', 'Cancel'),
        defaultValue: 'Pending',
      },
      paymentMethod: {
        type: Sequelize.ENUM('Pending', 'Visa', 'Cash', 'PayPal'),
        defaultValue: 'Pending',
      },
      paymentDate: {
        type: Sequelize.DATEONLY,
      },
      total: {
        type: Sequelize.FLOAT,
      },
      userId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'User',
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
    await queryInterface.dropTable('Invoice');
  },
};
