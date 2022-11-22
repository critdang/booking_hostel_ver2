const helperFn = require('../utils/helperFn');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Guest', [{
      fullName: 'admin',
      email: 'admin@gmail.com',
      address: '12 Hàm Nghi',
      phone: '0923423120',
      gender: 'male',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fullName: 'Huy',
      email: 'huy@gmail.com',
      address: '12 Hàm Nghi',
      phone: '0923423120',
      gender: 'male',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fullName: 'Dai',
      email: 'dai@gmail.com',
      address: '45 Lý Thái Tổ',
      phone: '0912321312',
      gender: 'male',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fullName: 'Duc',
      email: 'duc@gmail.com',
      address: '35 Nguyễn Văn Linh',
      phone: '0346932432',
      gender: 'male',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fullName: 'Chuong',
      email: 'chuong@gmail.com',
      address: '56 Trần Duy Hưng',
      phone: '0912321320',
      gender: 'male',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fullName: 'Quang',
      email: 'quang@gmail.com',
      address: '45 Nguyễn Huệ',
      phone: '0912321323',
      gender: 'male',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fullName: 'Nhan',
      email: 'nhan@gmail.com',
      address: '67 Trần Hưng Đạo',
      phone: '0912312312',
      gender: 'male',
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
