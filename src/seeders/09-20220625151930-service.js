module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Service', [{
      name: 'massage',
      thumbnail: 'massage.jpg',
      description: 'massage',
      price: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'spa',
      thumbnail: 'spa.jpg',
      description: 'spa',
      price: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'restaurant',
      thumbnail: 'restaurant.jpg',
      description: 'restaurant',
      price: 700,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'swimming pool',
      thumbnail: 'swimming-pool.jpg',
      description: 'swimming pool',
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'karaoke',
      thumbnail: 'karaoke.jpg',
      description: 'karaoke',
      price: 350,
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
