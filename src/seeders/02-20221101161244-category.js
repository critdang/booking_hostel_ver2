module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Category', [{
      name: 'Standard room',
      thumbnail: 'ex.jpg',
      description: 'Phòng ok',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Suite',
      thumbnail: 'ex.jpg',
      description: 'Phòng ok',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Delux room',
      thumbnail: 'ex.jpg',
      description: 'Phòng ok',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Economy',
      thumbnail: 'ex.jpg',
      description: 'Phòng ok',
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
