module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Category', [{
      name: 'Standard room',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Suite',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Delux room',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Economy',
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
