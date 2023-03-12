module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Invoice', [{
      userId: 3,
      code: 'u8jbo',
      checkinDate: new Date(),
      checkoutDate: new Date(),
      status: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 1732.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 1,
      code: '4vly8',
      checkinDate: new Date(),
      checkoutDate: new Date(),
      status: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 420,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 2,
      code: 'wssm8',
      checkinDate: new Date(),
      checkoutDate: new Date(),
      status: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 420,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 5,
      code: 'sxya7',
      checkinDate: new Date(),
      checkoutDate: new Date(),
      status: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 1785,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 4,
      code: 'ulapk',
      checkinDate: new Date(),
      checkoutDate: new Date(),
      status: 'Pending',
      paymentMethod: 'Cash',
      paymentDate: new Date(),
      total: 1260,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
