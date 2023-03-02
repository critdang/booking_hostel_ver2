module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Branch', [{
      name: 'Ho Chi Minh',
      address: 'Ho Chi Minh',
      phone: '0123456789',
      email: 'luxuryhotel-HCM@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Ha Noi',
      address: 'Ha Noi',
      phone: '0123456789',
      email: 'luxuryhotel-HN@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Da Nang',
      address: 'Da Nang',
      phone: '0123456789',
      email: 'luxuryhotel-DN@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Nha Trang',
      address: 'Nha Trang',
      phone: '0123456789',
      email: 'luxuryhotel-NT@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Phu Quoc',
      address: 'Phu Quoc',
      phone: '0123456789',
      email: 'luxuryhotel-PQ@gmail.com',
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
