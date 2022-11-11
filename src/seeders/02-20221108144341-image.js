module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Image', [{
      href: 'test.jpg',
      isDefault: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      href: 'test1.jpg',
      isDefault: true,

      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      href: 'test2.jpg',
      isDefault: true,

      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      href: 'test3.jpg',
      isDefault: true,
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
