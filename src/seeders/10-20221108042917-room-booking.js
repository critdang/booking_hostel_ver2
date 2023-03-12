module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RoomBooking', [{
      roomId: 3,
      invoiceId: 1,
      from: new Date(),
      to: new Date(),
      adults: 2,
      kids: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomId: 4,
      invoiceId: 2,
      from: new Date(),
      to: new Date(),
      adults: 2,
      kids: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomId: 1,
      invoiceId: 3,
      from: new Date(),
      to: new Date(),
      adults: 2,
      kids: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomId: 2,
      invoiceId: 4,
      from: new Date(),
      to: new Date(),
      adults: 2,
      kids: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomId: 5,
      invoiceId: 5,
      from: new Date(),
      to: new Date(),
      adults: 2,
      kids: 1,
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
