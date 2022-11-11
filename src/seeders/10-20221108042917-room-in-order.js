module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RoomInOrder', [{
      orderId: 1,
      roomId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      orderId: 2,
      roomId: 2,
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
