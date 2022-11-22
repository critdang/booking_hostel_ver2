module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RoomInOrder', [{
      orderId: 1,
      roomId: 3,
      from: new Date(),
      to: new Date(),
      adults: 2,
      kids: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 2,
      roomId: 2,
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
