module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Category', [{
      name: 'Standard room',
      createAt: new Date(),
      updateAt: new Date(),
    }, {
      name: 'Suite',
      createAt: new Date(),
      updateAt: new Date(),
    }, {
      name: 'Delux room',
      createAt: new Date(),
      updateAt: new Date(),
    }, {
      name: 'Economy',
      createAt: new Date(),
      updateAt: new Date(),
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
