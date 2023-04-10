/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/server');
// const { User } = require('../../src/models');
const {
  mockRoomSeeder, mockRoomSeederAPI, mockAdminUser, mockUser, mockCategorySeeder
} = require('../utils/mockObject');
const db = require('../../src/models/index');
const helperFnTest = require('../utils/helperFnTest');

describe('BRANCH /branch', () => {
  let token;
  let room;
  let category;
  beforeAll(async () => {
    try {
      await db.User.create(mockUser);
      const user = await helperFnTest.getLoginToken();
      token = user.token;
      category = await db.Category.create(mockCategorySeeder);
      room = await db.Room.create({ ...mockRoomSeeder, categoryId: category.id });
    } catch (error) {
      console.log(error);
    }
  });
  afterAll(async () => {
    await db.User.destroy({ where: { email: mockUser.email } });
    await db.User.destroy({ where: { email: mockAdminUser.email } });
    await db.Category.destroy({ where: { name: mockCategorySeeder.name } });
    await db.Room.destroy({ where: { name: mockRoomSeeder.name } });
  });
  // TEST-CREATE-room /room
  // it('create a room', async () => {
  //   const res = await request(app)
  //     .post(`/room`)
  //     .send({ ...mockRoomSeederAPI, categoryId: category.id })
  //     .set('Authorization', `Bearer ${token}`);
  //   console.log("🚀 ~ file: room.test.js:35 ~ it ~ res:", res);
  //   expect(res.statusCode).toEqual(200);
  // });
  // TEST-GET-room /room
  it('get  rooms successfully', async () => {
    const res = await request(app)
      .get(`/room`)
      .set('Authorization', `Bearer ${token}`);
    console.log("🚀 ~ file: room.test.js:35 ~ it ~ res:", res);
    expect(res.statusCode).toEqual(200);
  });
  // TEST-GET-room /room

  // it('get error if no provided enough attributes', async () => {
  //   const res = await request(app)
  //     .post(`/room`)
  //     .send({ name: 'branch1' })
  //     .set('Authorization', `Bearer ${token}`);
  //   expect(res.statusCode).toEqual(500);
  // });
});
