module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RoomImage', [{
      roomId: 3,
      imageId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomId: 3,
      imageId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomId: 2,
      imageId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomId: 2,
      imageId: 4,
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
