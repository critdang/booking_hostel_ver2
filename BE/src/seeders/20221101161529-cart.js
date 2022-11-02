module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cart', [{
      quantity: 3,
      userId: 3,
      roomId: 4,
      arrival: new Date(),
      departure: new Date(),
      onCart: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      quantity: 4,
      userId: 3,
      roomId: 5,
      arrival: new Date(),
      departure: new Date(),
      onCart: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      quantity: 1,
      userId: 3,
      roomId: 2,
      arrival: new Date(),
      departure: new Date(),
      onCart: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      quantity: 2,
      userId: 3,
      roomId: 2,
      arrival: new Date(),
      departure: new Date(),
      onCart: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      quantity: 3,
      userId: 3,
      roomId: 4,
      arrival: new Date(),
      departure: new Date(),
      onCart: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      quantity: 3,
      userId: 3,
      roomId: 2,
      arrival: new Date(),
      departure: new Date(),
      onCart: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      quantity: 1,
      userId: 3,
      roomId: 5,
      arrival: new Date(),
      departure: new Date(),
      onCart: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      quantity: 1,
      userId: 3,
      roomId: 5,
      arrival: new Date(),
      departure: new Date(),
      onCart: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      quantity: 4,
      userId: 3,
      roomId: 5,
      arrival: new Date(),
      departure: new Date(),
      onCart: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      quantity: 4,
      userId: 3,
      roomId: 4,
      arrival: new Date(),
      departure: new Date(),
      onCart: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      quantity: 1,
      userId: 3,
      roomId: 4,
      arrival: new Date(),
      departure: new Date(),
      onCart: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      quantity: 5,
      userId: 3,
      roomId: 5,
      arrival: new Date(),
      departure: new Date(),
      onCart: 0,
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
