/* eslint-disable no-unused-vars */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Branch', [{
      name: 'Ho Chi Minh',
      address: '50 Pham Huy Thong St, 1 District 550000, Ho Chi Minh, Vietnam',
      phone: '0123456789',
      email: 'luxuryhotel-HCM@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Ha Noi',
      address: '20 Phan Chu Trinh, Hoan Kiem District Hanoi, Vietnam',
      phone: '0123456789',
      email: 'luxuryhotel-HN@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Da Nang',
      address: '80 Bach Dang St, Hai Chau District 550000, Da Nang, Vietnam',
      phone: '0123456789',
      email: 'luxuryhotel-DN@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Nha Trang',
      address: '100 Hung Vuong St, Hai Chau District 550000, Nha Nang, Vietnam',
      phone: '0123456789',
      email: 'luxuryhotel-NT@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Phu Quoc',
      address: '123 Ngo Quyen St, Hai Chau District 550000, Phu Quoc, Vietnam',
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
