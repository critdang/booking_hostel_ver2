module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CartRoom', [{
      cartId: 1,
      roomId: 3,
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
