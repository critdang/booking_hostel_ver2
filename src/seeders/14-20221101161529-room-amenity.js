module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RoomAmenity', [{
      roomId: 3,
      amenityId: 1,
      isUsable: true,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 1,
      amenityId: 1,
      isUsable: true,
      amount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 2,
      amenityId: 2,
      isUsable: true,
      amount: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 4,
      amenityId: 3,
      isUsable: true,
      amount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 3,
      amenityId: 4,
      isUsable: true,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 1,
      amenityId: 5,
      isUsable: true,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomId: 2,
      amenityId: 5,
      isUsable: true,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 4,
      amenityId: 4,
      isUsable: true,
      amount: 1,
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
