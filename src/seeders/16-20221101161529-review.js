module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Review', [{
      roomId: 3,
      userId: 1,
      content: 'This is a good room',
      image: 'image.jpg',
      reviewDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 1,
      userId: 2,
      content: 'This is a good room',
      image: 'image.jpg',
      reviewDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 2,
      userId: 3,
      content: 'This is a good room',
      image: 'image.jpg',
      reviewDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 4,
      userId: 4,
      content: 'This is a good room',
      image: 'image.jpg',
      reviewDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 3,
      userId: 5,
      content: 'This is a good room',
      image: 'image.jpg',
      reviewDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 1,
      userId: 6,
      content: 'This is a good room',
      image: 'image.jpg',
      reviewDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      roomId: 2,
      userId: 7,
      content: 'This is a good room',
      image: 'image.jpg',
      reviewDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      roomId: 4,
      userId: 8,
      content: 'This is a good room',
      image: 'image.jpg',
      reviewDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});
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
