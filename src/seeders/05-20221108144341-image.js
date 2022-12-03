module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Image', [{
      href: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/213801629.jpg?k=572257cc4fc5062868248e9d125bfa6436d0c6e27114d9bea87cc842bb3b9cb2&o=&hp=1',
      isDefault: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      href: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/236949586.jpg?k=f57a30c3236b1bec866ce7a600672d4eda1e07fb36635244b69edd7ea4486077&o=&hp=1',
      isDefault: true,

      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      href: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/241698607.jpg?k=7df4c2222ed7aebda00d6e09a4886309495a62f37389052c2144a0fd4159eb77&o=&hp=1',
      isDefault: true,

      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      href: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/172417100.jpg?k=4dd70ef75751d8f0fcf990622e7ce474183157e0d7a9a41269e2e96222e77ec6&o=&hp=1',
      isDefault: true,
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
