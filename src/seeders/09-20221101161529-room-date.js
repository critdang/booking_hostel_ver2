module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('RoomDate', [{
      roomId: 3,
      from: '2022-11-11',
      to: '2022-11-12',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 1,
      from: '2022-11-12',
      to: '2022-11-13',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 2,
      from: '2022-11-11',
      to: '2022-11-14',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 4,
      from: '2022-11-13',
      to: '2022-11-14',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 3,
      from: '2022-11-13',
      to: '2022-11-17',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 1,
      from: '2022-11-13',
      to: '2022-11-18',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomId: 2,
      from: '2022-11-17',
      to: '2022-11-18',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 4,
      from: '2022-11-18',
      to: '2022-11-19',
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
