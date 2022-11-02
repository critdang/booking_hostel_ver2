const helperFn = require('../utils/helperFn');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [{
      userName: 'Huy',
      email: 'huy@gmail.com',
      password: await helperFn.hashPassword('123456'),
      address: '12 Hàm Nghi',
      phone: '0923423120',
      status: 'pending',
      image: 'dai.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userName: 'Dai',
      email: 'dai@gmail.com',
      password: await helperFn.hashPassword('123456'),
      address: '45 Lý Thái Tổ',
      phone: '0912321312',
      status: 'pending',
      image: 'dai.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userName: 'Duc',
      email: 'duc@gmail.com',
      password: await helperFn.hashPassword('123456'),
      address: '35 Nguyễn Văn Linh',
      phone: '0346932432',
      status: 'pending',
      image: 'dai.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userName: 'Chuong',
      email: 'chuong@gmail.com',
      password: await helperFn.hashPassword('123456'),
      address: '56 Trần Duy Hưng',
      phone: '0912321320',
      status: 'pending',
      image: 'dai.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userName: 'Quang',
      email: 'quang@gmail.com',
      password: await helperFn.hashPassword('123456'),
      address: '45 Nguyễn Huệ',
      phone: '0912321323',
      status: 'pending',
      image: 'dai.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userName: 'Nhan',
      email: 'nhan@gmail.com',
      password: await helperFn.hashPassword('123456'),
      address: '67 Trần Hưng Đạo',
      phone: '0912312312',
      status: 'pending',
      image: 'dai.jpg',
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
