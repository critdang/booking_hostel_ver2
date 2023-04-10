/* eslint-disable no-unused-vars */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Invoice', [
      {
        userId: 1,
        code: 'f73sd',
        checkinDate: new Date(),
        checkoutDate: new Date(),
        status: 'Pending',
        paymentMethod: 'VISA',
        paymentDate: new Date(),
        paymentAccountName: 'Nguyen Quang Dai',
        paymentAccountNumber: '1234567890',
        checkInStatus: 'Check In',
        total: 1732.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        userId: 3,
        code: 'u8jbo',
        checkinDate: new Date(),
        checkoutDate: new Date(),
        status: 'Completed',
        paymentMethod: 'VISA',
        paymentDate: new Date(),
        paymentAccountName: 'Nguyen Quang Dai',
        paymentAccountNumber: '1234567890',
        checkInStatus: 'Check In',
        total: 1732.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        userId: 7,
        code: '4vly8',
        checkinDate: new Date(),
        checkoutDate: new Date(),
        status: 'Pending',
        paymentMethod: 'PayPal',
        paymentDate: new Date(),
        paymentAccountName: 'Nguyen Duc Nhan',
        paymentAccountNumber: '1234567890',
        checkInStatus: 'Not Check In',
        total: 420,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        userId: 2,
        code: 'wssm8',
        checkinDate: new Date(),
        checkoutDate: new Date(),
        status: 'Completed',
        paymentMethod: 'VISA',
        paymentDate: new Date(),
        paymentAccountName: 'Dang Quoc Huy',
        paymentAccountNumber: '1234567890',
        checkInStatus: 'Not Check In',
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
        checkInStatus: 'Not Check In',
        total: 1785,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        userId: 4,
        code: 'ulapk',
        checkinDate: new Date(),
        checkoutDate: new Date(),
        status: 'Cancel',
        paymentMethod: 'Cash',
        paymentDate: new Date(),
        checkInStatus: 'Not Check In',
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
