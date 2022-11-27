module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RoomInOrder', [{
      roomId: 3,
      orderId: 1,
      from: new Date(),
      to: new Date(),
      adults: 2,
      kids: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomId: 2,
      orderId: 2,
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
