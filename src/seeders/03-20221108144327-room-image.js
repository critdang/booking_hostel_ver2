module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RoomImage', [{
      roomId: 3,
      imageId: 1,
    },
    {
      roomId: 3,
      imageId: 2,
    },
    {
      roomId: 2,
      imageId: 3,
    },
    {
      roomId: 2,
      imageId: 4,
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
