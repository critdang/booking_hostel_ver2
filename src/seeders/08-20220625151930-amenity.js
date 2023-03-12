module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Amenity', [{
      name: 'TV',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Air Conditioner',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'mini bar',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'work desk',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'heater',
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
