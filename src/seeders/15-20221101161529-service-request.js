module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ServiceRequest', [{
      roomBookingId: 3,
      serviceId: 1,
      date: new Date(),
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomBookingId: 1,
      serviceId: 2,
      date: new Date(),
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomBookingId: 2,
      serviceId: 3,
      date: new Date(),
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomBookingId: 4,
      serviceId: 4,
      date: new Date(),
      amount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomBookingId: 3,
      serviceId: 5,
      date: new Date(),
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomBookingId: 1,
      serviceId: 3,
      date: new Date(),
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomBookingId: 2,
      serviceId: 2,
      date: new Date(),
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomBookingId: 4,
      serviceId: 1,
      date: new Date(),
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});
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
