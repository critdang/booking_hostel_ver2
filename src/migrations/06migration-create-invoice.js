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
        allowNull: false,
        type: Sequelize.STRING,
      },
      checkinDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      checkoutDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('Pending', 'Completed', 'Cancel'),
        defaultValue: 'Pending',
      },
      paymentMethod: {
        allowNull: false,
        type: Sequelize.ENUM('Pending', 'VISA', 'Cash', 'PayPal'),
        defaultValue: 'Pending',
      },
      paymentDate: {
        type: Sequelize.DATEONLY,
      },
      paymentAccountName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      paymentAccountNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      checkInStatus: {
        allowNull: false,
        type: Sequelize.ENUM('Not Check In', 'Check In', 'Check Out'),
        defaultValue: 'Not Check In',
      },
      total: {
        allowNull: false,
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
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Invoice');
  },
};
