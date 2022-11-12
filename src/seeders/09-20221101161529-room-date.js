module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RoomDate', [{
      roomId: 3,
      from: new Date(),
      to: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 2,
      from: new Date(),
      to: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomId: 2,
      from: new Date(),
      to: new Date(),
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
