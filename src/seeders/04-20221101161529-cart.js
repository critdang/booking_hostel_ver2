module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cart', [{
      userId: 3,
      checkIn: new Date(),
      checkOut: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      checkIn: new Date(),
      checkOut: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      checkIn: new Date(),
      checkOut: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      checkIn: new Date(),
      checkOut: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      checkIn: new Date(),
      checkOut: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      checkIn: new Date(),
      checkOut: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      checkIn: new Date(),
      checkOut: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      checkIn: new Date(),
      checkOut: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      checkIn: new Date(),
      checkOut: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      checkIn: new Date(),
      checkOut: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      checkIn: new Date(),
      checkOut: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      userId: 3,
      checkIn: new Date(),
      checkOut: new Date(),
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
