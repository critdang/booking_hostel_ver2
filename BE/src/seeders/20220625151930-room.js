module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Room', [{
      roomName: 'VIP Room',
      detail: 'loren sum',
      description: 'loren sum',
      price: 500,
      reserve: 10,
      hot: true,
      active: true,
      image: 'room1.jpg',
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomName: 'Royal Room',
      detail: 'loren sum',
      description: 'loren sum',
      price: 400,
      reserve: 10,
      hot: true,
      active: true,
      image: 'room2.jpg',
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomName: 'Luxury Room',
      detail: 'loren sum',
      description: 'loren sum',
      price: 700,
      reserve: 10,
      hot: true,
      active: true,
      image: 'room3.jpg',
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomName: 'Standard Room',
      detail: 'loren sum',
      description: 'loren sum',
      price: 300,
      reserve: 10,
      hot: true,
      active: true,
      image: 'room4.jpg',
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomName: 'Business Room',
      detail: 'loren sum',
      description: 'loren sum',
      price: 350,
      reserve: 10,
      hot: true,
      active: true,
      image: 'room5.jpg',
      categoryId: 4,
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
