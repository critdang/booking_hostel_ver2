const helperFn = require('../utils/helperFn');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [{
      fullName: 'Huy',
      email: 'huy@gmail.com',
      password: await helperFn.hashPassword('123456'),
      address: '12 Hàm Nghi',
      phone: '0923423120',
      status: 'pending',
      gender: 'male',
      avatar: 'dai.jpg',
      isBlocked: false,
      resetToken: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fullName: 'Dai',
      email: 'dai@gmail.com',
      password: await helperFn.hashPassword('123456'),
      address: '45 Lý Thái Tổ',
      phone: '0912321312',
      status: 'pending',
      gender: 'male',
      avatar: 'dai.jpg',
      isBlocked: false,
      resetToken: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fullName: 'Duc',
      email: 'duc@gmail.com',
      password: await helperFn.hashPassword('123456'),
      address: '35 Nguyễn Văn Linh',
      phone: '0346932432',
      status: 'pending',
      gender: 'male',
      avatar: 'dai.jpg',
      isBlocked: false,
      resetToken: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fullName: 'Chuong',
      email: 'chuong@gmail.com',
      password: await helperFn.hashPassword('123456'),
      address: '56 Trần Duy Hưng',
      phone: '0912321320',
      status: 'pending',
      gender: 'male',
      avatar: 'dai.jpg',
      isBlocked: false,
      resetToken: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fullName: 'Quang',
      email: 'quang@gmail.com',
      password: await helperFn.hashPassword('123456'),
      address: '45 Nguyễn Huệ',
      phone: '0912321323',
      status: 'pending',
      gender: 'male',
      avatar: 'dai.jpg',
      isBlocked: false,
      resetToken: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fullName: 'Nhan',
      email: 'nhan@gmail.com',
      password: await helperFn.hashPassword('123456'),
      address: '67 Trần Hưng Đạo',
      phone: '0912312312',
      status: 'pending',
      gender: 'male',
      avatar: 'dai.jpg',
      isBlocked: false,
      resetToken: '123456',
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
