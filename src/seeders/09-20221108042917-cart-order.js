module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CartOrder', [{
      cartId: 1,
      orderId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      cartId: 1,
      orderId: 2,
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
