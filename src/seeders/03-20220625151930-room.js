module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Room', [{
      name: 'VIP Room',
      detail: 'loren sum',
      description: 'loren sum',
      price: 500,
      hot: true,
      active: true,
      adult: 2,
      kid: 1,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Royal Room',
      detail: 'loren sum',
      description: 'loren sum',
      price: 400,
      hot: true,
      active: true,
      adult: 2,
      kid: 1,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Luxury Room',
      detail: 'loren sum',
      description: 'loren sum',
      price: 700,
      hot: true,
      active: true,
      adult: 2,
      kid: 1,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Standard Room',
      detail: 'loren sum',
      description: 'loren sum',
      price: 300,
      hot: true,
      active: true,
      adult: 2,
      kid: 1,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Business Room',
      detail: 'loren sum',
      description: 'loren sum',
      price: 350,
      hot: true,
      active: true,
      adult: 2,
      kid: 1,
      categoryId: 4,
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
  },
};
