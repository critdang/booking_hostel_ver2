module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Image', [{
      href: 'test.jpg',
      isDefault: 'true',
    },
    {
      href: 'test1.jpg',
      isDefault: 'true',
    },
    {
      href: 'test2.jpg',
      isDefault: 'true',
    },
    {
      href: 'test3.jpg',
      isDefault: 'true',
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
