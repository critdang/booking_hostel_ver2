module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CartRoom', [{
      cartId: 1,
      roomId: 3,
      checkIn: new Date(),
      checkOut: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cartId: 1,
      roomId: 2,
      checkIn: new Date(),
      checkOut: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cartId: 1,
      roomId: 2,
      checkIn: new Date(),
      checkOut: new Date(),
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
