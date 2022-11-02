module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cart-order', [{
      cartId: 9,
      orderId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      cartId: 10,
      orderId: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      cartId: 11,
      orderId: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      cartId: 12,
      orderId: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      cartId: 11,
      orderId: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      cartId: 12,
      orderId: 12,
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
