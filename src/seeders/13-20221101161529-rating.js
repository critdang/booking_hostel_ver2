/* eslint-disable no-unused-vars */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rating', [{
      roomBookingId: 1,
      userId: 8,
      rate: 3,
      ratingDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomBookingId: 2,
      userId: 8,
      rate: 2,
      ratingDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomBookingId: 3,
      userId: 8,
      rate: 2,
      ratingDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomBookingId: 4,
      userId: 8,
      rate: 1,
      ratingDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomBookingId: 5,
      userId: 8,
      rate: 3,
      ratingDate: new Date(),
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
