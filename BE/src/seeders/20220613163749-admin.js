const helperFn = require('../utils/helperFn')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Admin', [{
      adminName: 'admin',
      email: 'admin@gmail.com',
      password: await helperFn.hashPassword('123456'),
      address: '12 admin',
      phone: '012321312',
      image: 'a.jpg',
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
