module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RoomDate', [{
      roomId: 3,
      from: '2022-11-13 08:23:39',
      to: '2022-11-13 19:23:39',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 2,
      from: '2022-11-13 07:23:39',
      to: '2022-11-13 21:23:39',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomId: 2,
      from: '2022-11-14 21:23:39',
      to: '2022-11-15 11:23:39',
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
