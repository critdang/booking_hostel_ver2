module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cart', [{
      userId: 3,
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
